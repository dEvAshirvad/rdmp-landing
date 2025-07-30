"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NewsItem {
	id: number;
	title: string;
	description: string;
	image: string;
	time: string;
	category: string;
	isFlashing: boolean;
	priority: "high" | "medium";
}

interface NewsApiResponse {
	results: Array<{
		title: string;
		description?: string;
		image_url?: string;
		pubDate: string;
		category?: string[];
	}>;
}

export default function NewsSection() {
	const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await fetch(
					"https://newsdata.io/api/1/news?apikey=pub_9f6e18979d8f4a71a5f4d9348e1ade33&country=in&language=hi&q=छत्तीसगढ़"
				);
				const data: NewsApiResponse = await res.json();
				const formatted: NewsItem[] = data.results.map(
					(item, index: number) => ({
						id: index + 1,
						title: item.title,
						description: item.description || "कोई विवरण उपलब्ध नहीं है।",
						image: item.image_url || "/placeholder.svg",
						time: new Date(item.pubDate).toLocaleString("hi-IN", {
							hour: "2-digit",
							minute: "2-digit",
							day: "numeric",
							month: "short",
						}),
						category: item.category?.[0] || "समाचार",
						isFlashing: index < 3,
						priority: index < 3 ? "high" : "medium",
					})
				);
				setNewsItems(formatted);
				setLoading(false);
			} catch {
				setError("समाचार लोड करने में समस्या हुई।");
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	useEffect(() => {
		if (!isAutoPlaying || newsItems.length === 0) return;
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, [isAutoPlaying, newsItems]);

	const nextNews = () => {
		setCurrentIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
	};

	const prevNews = () => {
		setCurrentIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
	};

	if (loading)
		return (
			<p className="text-center text-slate-600">समाचार लोड हो रहा है...</p>
		);
	if (error) return <p className="text-center text-red-600">{error}</p>;
	if (!newsItems.length)
		return (
			<p className="text-center text-slate-500">कोई समाचार उपलब्ध नहीं है।</p>
		);

	const currentNews = newsItems[currentIndex];

	return (
		<div className="space-y-6">
			{/* Featured News */}
			<Card className="shadow-xl overflow-hidden border-l-4 border-red-700">
				<CardHeader className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white">
					<div className="flex items-center justify-between">
						<CardTitle className="text-xl font-bold flex items-center space-x-2">
							<Bell className="w-5 h-5" />
							<span>ताजा समाचार / Latest News</span>
							{currentNews.isFlashing && (
								<Badge className="bg-amber-400 text-red-800 animate-pulse font-bold">
									BREAKING
								</Badge>
							)}
						</CardTitle>
						<div className="flex items-center space-x-2">
							<Button
								variant="ghost"
								size="sm"
								onClick={prevNews}
								className="text-white hover:bg-white/20">
								<ChevronLeft className="w-4 h-4" />
							</Button>
							<Button
								variant="ghost"
								size="sm"
								onClick={nextNews}
								className="text-white hover:bg-white/20">
								<ChevronRight className="w-4 h-4" />
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-6 bg-gradient-to-br from-white to-amber-50">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-1">
							<Image
								src={currentNews.image}
								alt="News Image"
								width={400}
								height={256}
								className="w-full h-64 object-cover rounded-lg shadow-md"
							/>
						</div>
						<div className="lg:col-span-2 space-y-4">
							<div className="flex items-center justify-between">
								<Badge
									variant="secondary"
									className={`${
										currentNews.priority === "high"
											? "bg-red-100 text-red-800"
											: "bg-blue-100 text-blue-800"
									}`}>
									{currentNews.category}
								</Badge>
								<div className="flex items-center space-x-1 text-sm text-slate-500">
									<Clock className="w-4 h-4" />
									<span>{currentNews.time}</span>
								</div>
							</div>
							<h3
								className={`text-xl font-bold ${
									currentNews.isFlashing
										? "animate-pulse text-red-700"
										: "text-slate-800"
								}`}>
								{currentNews.title}
							</h3>
							<p className="text-slate-700 leading-relaxed text-justify">
								{currentNews.description}
							</p>
							<div className="flex items-center justify-between pt-4 border-t border-amber-200">
								<span className="text-sm text-slate-500">
									समाचार {currentIndex + 1} of {newsItems.length}
								</span>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setIsAutoPlaying(!isAutoPlaying)}
									className="border-amber-300 text-amber-700 hover:bg-amber-50">
									{isAutoPlaying ? "रोकें" : "चलाएं"} Auto-scroll
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* News Ticker */}
			<Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
				<div className="flex items-center">
					<div className="bg-red-700 px-4 py-3 font-bold text-sm flex items-center space-x-2">
						<Bell className="w-4 h-4 animate-pulse" />
						<span>LIVE NEWS</span>
					</div>
					<div className="flex-1 py-3">
						<div
							className="whitespace-nowrap"
							style={{
								animation: "marquee 120s linear infinite",
							}}>
							<span className="text-sm">
								{newsItems.map((item, index) => (
									<span key={item.id} className="mx-8">
										<span className="font-semibold text-amber-300">
											{item.category}:
										</span>{" "}
										{item.title}
										{index < newsItems.length - 1 && " • "}
									</span>
								))}
							</span>
						</div>
					</div>
				</div>
			</Card>

			{/* All News Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{newsItems.slice(0, 4).map((item) => (
					<Card
						key={item.id}
						className="hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-amber-500 hover:border-l-amber-600">
						<CardContent className="p-4">
							<div className="grid grid-cols-3 gap-3">
								<div className="col-span-1">
									<Image
										src={item.image}
										alt="News thumbnail"
										width={100}
										height={64}
										className="w-full h-16 object-cover rounded"
									/>
								</div>
								<div className="col-span-2 space-y-2">
									<div className="flex items-center justify-between">
										<Badge
											variant="outline"
											className={`text-xs ${
												item.priority === "high"
													? "border-red-300 text-red-700 bg-red-50"
													: "border-blue-300 text-blue-700 bg-blue-50"
											}`}>
											{item.category}
										</Badge>
										<span className="text-xs text-slate-500 flex items-center space-x-1">
											<Clock className="w-3 h-3" />
											<span>{item.time}</span>
										</span>
									</div>
									<h4
										className={`font-semibold text-xs leading-tight ${
											item.isFlashing ? "text-red-700" : "text-slate-800"
										}`}>
										{item.title}
									</h4>
									<p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
