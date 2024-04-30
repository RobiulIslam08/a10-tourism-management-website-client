import {  JackInTheBox } from "react-awesome-reveal";


const Blog = () => {
	return (
		<div>
			<section className="py-6 sm:py-12 dark:bg-purple-200 dark:text-gray-800">
				<div className="container p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center lg:w-[80%] mx-auto">
						<h2 className="text-3xl font-bold">Our Blog</h2>
						<p className="font-serif text-sm dark:text-gray-600 ">Explore our blog for insights on effective tourism management website design, featuring industry trends, user experience tips, and digital marketing strategies to enhance your online presence.</p>
					</div>
					<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
						<JackInTheBox delay={100}  cascade damping={0.1}>
							<article className="flex flex-col dark:bg-gray-50">

								<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src=" https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg" />

								<div className="flex flex-col flex-1 p-6">
									<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>

									<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Chiang Mai</h3>
									<p className="text-xs tracking-wider text-gray-500 ">Ancient temples, lush jungles, and vibrant markets enchant visitors</p>
									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
										<span>June 1, 2020</span>
										<span>2.1K views</span>
									</div>
								</div>
							</article>
						</JackInTheBox>
						<JackInTheBox delay={100}  cascade damping={0.1}>
							<article className="flex flex-col dark:bg-gray-50">

								<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/t8B1TdN/Nilgiri.jpg" />

								<div className="flex flex-col flex-1 p-6">
									<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Bandarban</h3>
									<p className="text-xs tracking-wider text-gray-500 ">Verdant hills, tribal culture, and serene landscapes embrace adventurers.</p>
									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
										<span>June 2, 2020</span>
										<span>2.2K views</span>
									</div>
								</div>
							</article>
						</JackInTheBox>
						<JackInTheBox delay={100}  cascade damping={0.1}>
							<article className="flex flex-col dark:bg-gray-50">

								<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />

								<div className="flex flex-col flex-1 p-6">

									<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Langkawi</h3>
									<p className="text-xs tracking-wider text-gray-500 ">Endless golden sands meet vibrant culture by the sea.</p>
									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
										<span>June 3, 2020</span>
										<span>2.3K views</span>
									</div>
								</div>
							</article>
						</JackInTheBox>
						<JackInTheBox delay={100}  cascade damping={0.1}>
							<article className="flex flex-col dark:bg-gray-50">

								<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpg" />

								<div className="flex flex-col flex-1 p-6">
									<h3 className="flex-1 py-2 text-lg font-semibold leading-snug"> Cox's Bajar</h3>
									<p className="text-xs tracking-wider text-gray-500 ">Majestic beaches, bustling markets, and rich cultural heritage await.</p>
									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
										<span>June 4, 2020</span>
										<span>2.4K views</span>
									</div>
								</div>
							</article>
						</JackInTheBox>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;