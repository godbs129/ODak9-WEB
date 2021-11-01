import Slider from 'react-slick';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './ImageSlider.scss';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const ImageSlider = (): JSX.Element => {

	const setting = {
		dots: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3800,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: <MdArrowBackIosNew color="black" />,
		nextArrow: <MdArrowForwardIos color="black" />
	}

	const posts = [
		{
			"idx": 9,
			"title": "update",
			"content": "update",
			"picture": "http://localhost:8080/public/d32aa477-870d-4eab-8a78-6eb93c96f110.jpeg",
			"createdAt": "2021-07-13T12:15:01.384Z",
			"user": {
				"id": "test",
				"pw": "test",
				"name": "test",
				"nickName": "test"
			},
			"category": {
				"idx": 1,
				"name": "가수"
			},
			"userId": "test",
			"categoryIdx": 1
		},
		{
			"idx": 9,
			"title": "update",
			"content": "update",
			"picture": "http://localhost:8080/public/d32aa477-870d-4eab-8a78-6eb93c96f110.jpeg",
			"createdAt": "2021-07-13T12:15:01.384Z",
			"user": {
				"id": "test",
				"pw": "test",
				"name": "test",
				"nickName": "test"
			},
			"category": {
				"idx": 1,
				"name": "가수"
			},
			"userId": "test",
			"categoryIdx": 1
		},
		{
			"idx": 9,
			"title": "update",
			"content": "update",
			"picture": "http://localhost:8080/public/d32aa477-870d-4eab-8a78-6eb93c96f110.jpeg",
			"createdAt": "2021-07-13T12:15:01.384Z",
			"user": {
				"id": "test",
				"pw": "test",
				"name": "test",
				"nickName": "test"
			},
			"category": {
				"idx": 1,
				"name": "가수"
			},
			"userId": "test",
			"categoryIdx": 1
		}
	]

	return (
		<>
			<Slider {...setting} className="sli">
				{posts.map((post) => {
					return (
						<div className="slide">
							<img src={post.picture} />
						</div>
					)
				})}
			</Slider>
		</>
	);
}

export default ImageSlider;