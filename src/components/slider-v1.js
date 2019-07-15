import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [
				'https://pbs.twimg.com/profile_images/1088930541066510336/I9h160sb_400x400.jpg',
				'https://gopackup.com/files/images/list/1350004435kyr26v.jpg',
				'https://pp.userapi.com/c623926/v623926307/47020/2bFswipJIXs.jpg?ava=1',
				'https://pbs.twimg.com/profile_images/707941388080566272/kWtOn7FT_400x400.jpg'

			],
			currentImageIndex: 0,
			isCycleMode: false,
			canGoPrev: false,
			canGoNext: true,
		};

		this.nextSliderHandler = this.nextSliderHandler.bind(this);

	}

	MakeNextStep(currentIndex) {
		let newIndex = currentIndex;
		if (currentIndex < this.state.images.length - 1) {
			newIndex = this.state.currentImageIndex + 1;
			this.setState({canGoPrev: true});
		}

		if (newIndex === this.state.images.length - 1) {
			this.setState({canGoNext: false});
		}

		return newIndex;
	}

	MakePrevStep(currentIndex) {
		let newIndex = currentIndex;
		if (currentIndex > 0) {
			newIndex = this.state.currentImageIndex - 1;
			this.setState({canGoNext: true});
		}

		if (newIndex === 0) {
			this.setState({canGoPrev: false});
		}
		return newIndex;
	}

	nextSliderHandler(e) {
		let currentIndex = this.state.currentImageIndex;
		let newIndex = currentIndex;

		if (e.currentTarget.dataset.direction === 'next') {
			newIndex = this.MakeNextStep(currentIndex);

		} else {
			newIndex =this.MakePrevStep(currentIndex);
		}

		this.setState({currentImageIndex: newIndex});
	}


	render() {
		return (
			<div className="slider">
				<div>
					<button disabled={!this.state.canGoPrev} data-direction="prev" onClick={ this.nextSliderHandler.bind(this) }>PREV</button>
				</div>
				<div>
					<img src={this.state.images[this.state.currentImageIndex]} alt="" />
					{ this.state.currentImageIndex }
				</div>
				<div>
					<button disabled={!this.state.canGoNext} data-direction="next" onClick={ this.nextSliderHandler.bind(this) }>NEXT</button>
				</div>
			</div>
		);
	}
}