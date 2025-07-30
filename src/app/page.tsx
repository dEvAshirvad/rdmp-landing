import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NewsSection from "@/components/news-section";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
			{/* Header */}
			<header className="bg-gradient-to-r from-orange-500 via-white to-green-600 shadow-lg border-b-4 border-amber-500 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-white/95 to-green-600/90"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-blue-100/50"></div>

				<div className="container mx-auto px-4 py-4 relative z-10">
					<div className="flex items-center justify-between">
						{/* Logos and Title */}
						<div className="flex items-center space-x-4">
							<div className="w-20 h-20">
								<img
									src="/images/bharat-sarkar-logo.png"
									alt="Gov Logo"
									className="object-contain drop-shadow-lg"
								/>
							</div>
							<div className="w-20 h-20">
								<img
									src="/images/cg-logo.png"
									alt="CG Logo"
									className="object-contain drop-shadow-lg"
								/>
							</div>
							<div>
								<h1 className="text-2xl font-bold text-blue-900 drop-shadow-md">
									Raipur Departmental & Coordination Portal
								</h1>
								<p className="text-sm text-red-700 font-medium drop-shadow-sm">
									District Administration Raipur
								</p>
							</div>
						</div>

						{/* Officials */}
						<div className="hidden lg:flex items-center space-x-4">
							{[
								{
									name: "Shri Ramen Deka",
									title: "Hon. Governor, C.G.",
									img: "governor-ramen-deka.png",
									border: "emerald-800",
								},
								{
									name: "Shri Vishnu Deo Sai",
									title: "Hon. Chief Minister, C.G.",
									img: "cm-vishnu-deo-sai.png",
									border: "red-800",
								},
							].map((officer) => (
								<div key={officer.name} className="text-center">
									<div
										className={`w-14 h-14 rounded-full border-4 border-${officer.border} mx-auto mb-2 overflow-hidden shadow-lg`}>
										<img
											src={`/images/${officer.img}`}
											alt={officer.name}
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="text-xs">
										<p className="font-semibold text-slate-800">
											{officer.name}
										</p>
										<p className="text-slate-700">{officer.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</header>

			{/* Marquee Banner */}
			<div className="bg-gradient-to-r from-amber-600 via-red-700 to-amber-600 text-white shadow-lg border-b-2 border-amber-400">
				<div className="flex items-center">
					<div className="bg-emerald-800 px-6 py-4 font-bold text-sm flex items-center space-x-2 shadow-lg">
						<span className="text-amber-300">🏛️</span>
						<span>CG GOVERNMENT SCHEMES</span>
					</div>
					<div className="flex-1 py-4 overflow-hidden">
						<div className="animate-marquee whitespace-nowrap text-sm font-medium">
							{[
								[
									"मुख्यमंत्री कन्या विवाह योजना",
									"Financial assistance for girl child marriage",
								],
								[
									"राजीव गांधी किसान न्याय योजना",
									"Direct cash transfer to farmers",
								],
								["गोधन न्याय योजना", "Cow dung procurement scheme"],
								["सुराजी गांव योजना", "Rural development program"],
								[
									"मुख्यमंत्री स्लम स्वास्थ्य योजना",
									"Healthcare for slum dwellers",
								],
								["छत्तीसगढ़ मितान योजना", "Doorstep service delivery"],
								["मुख्यमंत्री वृक्ष संपदा योजना", "Tree wealth scheme"],
								["दाई-दीदी क्लिनिक योजना", "Women healthcare initiative"],
								["छत्तीसगढ़ धान बोनस योजना", "Paddy bonus scheme"],
								[
									"मुख्यमंत्री युवा उद्यमी योजना",
									"Youth entrepreneurship program",
								],
							].map(([title, desc], idx) => (
								<span key={idx} className="mx-8">
									<span className="text-amber-300 font-bold">{title}</span> -{" "}
									{desc}
								</span>
							))}
						</div>
					</div>
					<div className="bg-emerald-800 px-4 py-4 text-xs text-center">
						<div className="text-amber-300 font-bold">Apply Online</div>
						<div>cgstate.gov.in</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="w-full max-w-[85rem] mx-auto px-4 py-8">
				<div className="flex gap-6">
					{/* Sidebar */}
					<div className="w-2/5 space-y-4">
						<Card className="bg-white shadow-lg border-l-4 border-emerald-600">
							<CardHeader className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
								<CardTitle className="text-lg">
									Message from Collector
								</CardTitle>
							</CardHeader>
							<CardContent className="p-4 space-y-3">
								<div className="flex gap-4">
									<Image
										src={"/collector.jpeg"}
										alt="Collector"
										width={100}
										height={100}
										className="size-32 border-4 border-emerald-600"></Image>
									<p className="leading-snug">
										Welcome to the Raipur Departmental & Coordination Portal. As
										the District Collector, I am committed to ensuring
										transparent and efficient governance. Our portal serves as a
										bridge between citizens and government services, providing
										easy access to various schemes and projects. Together, we
										are building a more inclusive and prosperous Raipur.
									</p>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-white shadow-lg border-l-4 border-emerald-600">
							<CardHeader className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
								<CardTitle className="text-lg">
									Message from Commissioner
								</CardTitle>
							</CardHeader>
							<CardContent className="p-4 space-y-3">
								<div className="flex gap-4">
									<Image
										src={"/commisioner.jpeg"}
										alt="Collector"
										width={100}
										height={100}
										className="size-32 border-4 border-emerald-600"></Image>
									<p className="leading-snug">
										As the Commissioner of Raipur, I am dedicated to fostering
										innovation in public service delivery. This digital portal
										represents our commitment to modern governance, ensuring
										that every citizen has access to government services at
										their fingertips. We are working towards a digitally
										empowered and connected Raipur.
									</p>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-white shadow-lg border-l-4 border-emerald-600">
							<CardHeader className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
								<CardTitle className="text-lg">Message from CEO</CardTitle>
							</CardHeader>
							<CardContent className="p-4 space-y-3">
								<div className="flex gap-4">
									<Image
										src={"/ceo.jpg"}
										alt="Collector"
										width={100}
										height={100}
										className="size-32 border-4 border-emerald-600"></Image>
									<p className="leading-snug">
										As the Chief Executive Officer, I am proud to lead our team
										in implementing cutting-edge digital solutions for better
										governance. This portal exemplifies our vision of a smart,
										efficient, and citizen-centric administration. We are
										committed to leveraging technology to improve service
										delivery and enhance citizen satisfaction.
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Location Info */}
						<Card className="bg-gradient-to-br from-amber-50 to-red-50 border-l-4 border-amber-600">
							<CardContent className="p-4 text-center">
								<h3 className="font-bold text-amber-800 mb-2">राजधानी</h3>
								<p className="text-2xl font-bold text-red-800">रायपुर</p>
								<p className="text-sm text-amber-700">Capital City</p>
							</CardContent>
						</Card>
					</div>

					{/* Login Card */}
					<div className="w-3/5 space-y-4">
						{/* create a card with a heading and a description and list of projects */}
						<Card className="bg-gradient-to-br from-amber-50 to-red-50 border-l-4 border-amber-600 p-4">
							<CardHeader>
								<CardTitle>Department Projects</CardTitle>
								<CardDescription className="text-sm w-3/5">
									District Administration Raipur Projects are a collection of
									projects aimed at improving the lives of the people of
									Chhattisgarh.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-3 gap-4 text-center">
									<Link
										href={"https://shresth.rdmp.in/login"}
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">श्रेष्ठ</h3>
									</Link>
									<Link
										href={"https://rahat.rdmp.in/login"}
										target="_blank"
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">राहत</h3>
									</Link>
									<Link
										href={"https://feedback.rdmp.in"}
										target="_blank"
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">आओ खुद को परखें</h3>
									</Link>
									<Link
										href={"https://suchna.rdmp.in"}
										target="_blank"
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">
											सूचना संकलन पोर्टल
										</h3>
									</Link>
									<Link
										href={"https://sushasan.rdmp.in"}
										target="_blank"
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">
											सुशासन एक्सप्रेस
										</h3>
									</Link>
									<Link
										href={"https://urvi.rdmp.in"}
										target="_blank"
										className="border-2 hover:border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-lg aspect-square flex flex-col bg-background items-center justify-center p-4">
										<h3 className="text-3xl font-bold mb-2">उर्वी</h3>
									</Link>
								</div>
							</CardContent>
						</Card>

						{/* News Section */}
						<NewsSection />
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-slate-800 text-white py-8 mt-12">
				<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-300">
					<div>
						<h3 className="font-bold mb-4 text-white">
							District Administration Raipur
						</h3>
						<p>Official portal for citizens and government services</p>
					</div>
					<div>
						<h3 className="font-bold mb-4 text-white">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-white">
									Chief Minister
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Governor
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Departments
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Schemes
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4 text-white">Contact</h3>
						<p>
							Secretariat, Raipur
							<br />
							Chhattisgarh - 492001
							<br />
							Phone: 0771-2234567
						</p>
					</div>
				</div>
				<div className="border-t border-slate-700 mt-8 pt-4 text-center text-sm text-slate-400">
					&copy; 2024 District Administration Raipur. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
