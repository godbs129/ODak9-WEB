import Slider from 'react-slick';
import './Category.scss';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CategoryList } from './CategoryList';

const Category = (): JSX.Element => {

	const setting = {
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: <MdArrowBackIosNew color="black" />,
		nextArrow: <MdArrowForwardIos color="black" />
	}

	return (
		<>
			<Slider {...setting} className="category">
				{CategoryList.map((category) => {
					return (
						<div className="category-carousel">
							<img src={category.picture} />
						</div>
					)
				})}
			</Slider>
		</>
	)
}

export default Category;