const apiKey = "bUjUYoUjpC3ze8LnAbffLGIY_c55ogw869GXbuc83-Ncxz-GCJKsR-OKClj50zBMKSOsgsgWhFY3-bXSGRzbhuaHGcHfp6RjxRA5jChqj87EEPVegzV2D-RUXL-gX3Yx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address1,
                            city: business.location.city,
                            state: business.location.state, 
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating, 
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
};

export default Yelp;