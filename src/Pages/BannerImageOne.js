import React, { useEffect, useState } from 'react';
import './BannerImageOne.css';

const BannerImageOne = () => {
   
    const [banners, setBanners] = useState([]);


    useEffect(() => {
        fetch(`https://seo-server-0f337e2505b4.herokuapp.com/banner-one`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);
    return (
        <div>
            {
                banners.map( banner => 
                    <img className='w-full my-4' src={banner.bannerImageOne} alt="Banner One"></img>
                    )
            }
        </div>
    );
};

export default BannerImageOne;