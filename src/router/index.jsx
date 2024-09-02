import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "components/layout/LayoutEight.jsx";
import LayoutOne from "components/layout/LayoutOne.jsx";
import Layout from "components/layout/index.jsx";
import ErrorPage from "src/error-page";
import AboutUs from "page/about/AboutUs";
import ContactUs from "page/contact/ContactUs";
import Reset from "page/auth/ResetPassword.jsx";
import SignIn from "page/auth/SignIn";
import SignUp from "page/auth/SignUp";
import BlogGridPage from "page/blog/BlogGridPage.jsx";
import SingleBlogPage from "page/blog/SingleBlog.jsx";
import Home from "page/home/Home.jsx";
import Moments from "page/moments/Moments";
import MomentsDetail from "page/moments-detail/SingleMoment"
import SingleTeam from "page/team-detail/SingleTeam.jsx";
import CommingSoon from "page/utility/CommingSoon.jsx";
import Faq from "page/utility/Faq.jsx";
import TestimonialPage from "page/utility/Testimonial.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <Home />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					{
						path: "/testimonial",
						element: <TestimonialPage />,
					},
					{
						path: "/blog/:id",
						element: <SingleBlogPage />,
					},
					{
						path: "/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/single-team",
						element: <SingleTeam />,
					},
					{
						path: "/moments",
						element: <Moments />,
					},
					{
						path: "/single-portfolio",
						element: <MomentsDetail />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutEight />,
				children: [
					{
						path: "/coming-soon",
						element: <CommingSoon />,
					},
					{
						path: "/reset-password",
						element: <Reset />,
					},
					{
						path: "/sign-up",
						element: <SignUp />,
					},
					{
						path: "/sign-in",
						element: <SignIn />,
					},
				],
			},
		],
	},
]);
