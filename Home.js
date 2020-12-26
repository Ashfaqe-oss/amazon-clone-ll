import React, { useEffect } from 'react';
import './Home.css';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home () {
	const [{ basket, hover }, dispatch] = useStateValue();

	useEffect(
		() => {
			setTimeout( () => {
				dispatch( {
					type: 'SET_HOVER',
					hover: false
				} );
			}, 5000 );
		},
		[basket, dispatch]
	);

	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg"
				alt=""
			/>
			{hover ? (
				<div className="home__hover">
					{basket.map( ( item ) => (
						<div className="home__hoverProduct">
							<h4>You have added </h4>
							<h3> {item.title} </h3>
							<h4> to your cart... for </h4>
							<p>₹ {item.price} </p>
						</div>
					) )}
				</div>
			) : (
					' '
				)}
			{/* products */}
			<div className="home__row">
				<Product
					id="1"
					title="Asus TUf A15 FA566IH-HN146T"
					info="15.6 FHD 144Hz display, Ryzen 5 4600H, GTX 1650 4GB Graphics, 8GB RAM/512GB NVMe SSD//Fortress Gray"
					price="61,990"
					rating={4}
					image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/asus-tuf-1591088509.jpg"
				/>
				<Product
					id="2"
					title="Asus TUf A15 FA506IH-AL047T"
					info="15.6 FHD 144Hz display, Ryzen 5 4600H, GTX 1650 4GB Graphics, 8GB RAM/512GB NVMe SSD/Bonfire Black"
					price="60,990"
					rating={5}
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPYw9X0nlio13pSeqMEj3_0nXV9GqfqzI4HQ&usqp=CAU"
				/>
				<Product
					id="16"
					title="ASUS ZenBook 13 UX334FL-A7622TS"
					info="Intel Core i7 10th Gen 13.3-inch FHD /16GB RAM/1TB PCIe SSD/2GB NVIDIA GeForce MX250 Graphics/1.27 Kg"
					price="81,990"
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/714pjnK96bL._SL1500_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="3"
					title="Think like a Monk"
					info="by Jay Shetty"
					price="380"
					rating={5}
					image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg"
				/>
				<Product
					id="4"
					title="The Buddha and the Badass"
					info="The Secret Spiritual Art of Succeeding at Work"
					price="615"
					rating={4}
					image="https://m.media-amazon.com/images/I/81wv0HQ5xiL._AC_UY218_.jpg"
				/>
				<Product
					id="5"
					title="Limitless"
					info=" Upgrade Your Brain, Learn Anything Faster, and Unlock"
					price="240"
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/41U3sg4aP-L._SX331_BO1,204,203,200_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="6"
					title="LG Ultragear"
					info="27-inch IPS FHD, G-Sync Compatible, HDR 10, Gaming Monitor with Display Port, HDMI x 2, Height Adjust & Pivot Stand, 144Hz, 1ms - 27GL650F (Black)"
					price="22,990"
					rating={4}
					image="https://m.media-amazon.com/images/I/812wPJneMKL._AC_UL320_.jpg"
				/>
				<Product
					id="7"
					title="Dell G3 3500"
					info="15.6-inch FHD Laptop, i7-10750H/8GB/512GB SSD/Windows 10/ 1650 Ti/Eclipse Black"
					price="90,960"
					rating={4}
					image="https://m.media-amazon.com/images/I/61s0UA4pmVL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="8"
					title="Odyssey Ultrawide"
					info="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
					price="1,24,000"
					rating={4}
					image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UL320_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="9"
					title="Corsair"
					info="Corsair 8GB DDR4 3000MHz RGB Ram"
					price="3,400"
					rating={5}
					image="https://m.media-amazon.com/images/I/81w3hLRKT8L._AC_UY218_.jpg"
				/>
				<Product
					id="10"
					title="WD Green"
					info="Western Digital Green 1 TB 2.5 inch SATA III Internal Solid State Drive (WDS100T2G0A)"
					price="7,200"
					rating={4}
					image="https://m.media-amazon.com/images/I/81f1uMKgHtL._AC_UY218_.jpg"
				/>
				<Product
					id="11"
					title="hyperX"
					info="Kingston Technology Impact 8GB 3200MHz DDR4 CL20 SODIMM Memory HX432S20IB2/8, Black (8GB DDR 4 3200MHZ)"
					price="4,100"
					rating={4}
					image="https://m.media-amazon.com/images/I/71+hVLiqzSL._AC_UY218_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="12"
					title="Fostelo"
					info="Women's Queenie Handbag multicolor (FSB-1065)"
					price="712"
					rating={4}
					image="https://m.media-amazon.com/images/I/61AAYRonufL._AC_SX615_SY462_.jpg"
				/>
				<Product
					id="13"
					title="Fostelo"
					info="Women's Elite Handbag (Beige) (FSB-161)"
					price="622"
					rating={3}
					image="https://m.media-amazon.com/images/I/61UN5dXwhBL._AC_SX615_SY462_.jpg"
				/>
				<Product
					id="14"
					title="Fostelo"
					info="Women's Combo Handbag & Clutch (Blue & Blue) (FSB-1070-FC-34)"
					price="711"
					rating={4}
					image="https://m.media-amazon.com/images/I/61H0OsU6QGL._AC_SX615_SY462_.jpg"
				/>
			</div>
			{/*<div className="home__row">
        <Product
          id=""
          title=""
          info=""
          price=""
          rating={}
          image=""
        />
        </div>*/}
			{/* id, name, price, rating, image*/}
		</div>
	);
}

export default Home;
//https://firebasestorage.googleapis.com/v0/b/insta-clone-3afa5.appspot.com/o/images%2Famazon%20home.PNG?alt=media&token=510a0994-81e0-44b5-8538-835861865de7
