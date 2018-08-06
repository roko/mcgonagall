const eventsData = [
  {
    "_id":"5b662dc37962d11e33281b6d",
    "id":"k-00a2R9zdJTZuLi1z4CAA",
    "title":"Fan of Kebab",
    "name":"Zeugma Kebab",
    "image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/LfkeXT_DmXiMWtAs9H70gQ/o.jpg","url":"https://www.yelp.com/biz/zeugma-kebab-san-jose?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Mediterranean",
    "rating":5,
    "address":"889 S Almaden Ave San Jose, CA 95110","phone":"(408) 940-5080","distance":495.07892081075056,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.320867248548,"longitude":-121.883736342971}
  },
  {
    "_id":"5b4d4b70de381f06ee96d021",
    "id":"p5uqf2ujdisFkjkMDAT9Ow","name":"Sweet Garden",
    "title": "Who do not like deep fried Seafood?",
    "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/CUC8Mew3HP8Yj6Qpgtmfww/o.jpg","url":"https://www.yelp.com/biz/sweet-garden-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Asian Fusion","rating":4.5,"price":"$","address":"39473 Fremont Blvd Fremont, CA 94538","phone":"(510) 771-9518","distance":1046.0377098819436,"notes":"","favorite":true,"interested":false,"__v":0,"coordinates":{"latitude":37.5438591450212,"longitude":-121.981836226954}
  },
  {
    "_id":"5b4d4b70de381f06ee96d02f",
    "id":"w6hgHC7itFtRpvN9Xif5bw",
    "title": "Sushi lovers",
    "name":"Kazuma Sushi","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/32dD-DX-ZhxGYQGQFucWGQ/o.jpg","url":"https://www.yelp.com/biz/kazuma-sushi-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Japanese","rating":4.5,"price":"$$","address":"47986 Warm Springs Blvd Fremont, CA 94539","phone":"(510) 573-0914","distance":8648.314467951395,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.4765776,"longitude":-121.9216436}
  },
  {
    "_id":"5b4d4b77de381f06ee96d040",
    "id":"-aQhbXq_Imncxo5JgHVODw","name":"Veggie Lee",
    "title": "Budi Zen Garden",
    "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/6kiMqfj-DEC1Vv15gbbh_w/o.jpg","url":"https://www.yelp.com/biz/veggie-lee-hayward-2?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Vegan","rating":4.5,"price":"$$","address":"25036 Hesperian Blvd Hayward, CA 94545","phone":"(510) 785-7133","distance":15964.025441075208,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.6442899133877,"longitude":-122.104593899728}
  },
  {
    "_id":"5b63b0e0b5a107f218413630",
    "id":"vh82YTce1_YibwS72QOuVA",
    "name":"EE Home Cooking",
    "title": "I love engineering and I love cooking",  
    "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/AdGHL87fWS5vt_Iscmuxxw/o.jpg","url":"https://www.yelp.com/biz/ee-home-cooking-fremont-2?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4.5,"price":"$$","address":"43689 Mission Blvd Fremont, CA 94539","phone":"(510) 440-8822","distance":6105.255523334416,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.52637,"longitude":-121.91849}
  },
  {
    "_id":"5b63b0e0b5a107f218413632",
    "id":"lL6Z1zD9HSM-1HCURxCDSg",
    "name":"Good Fortune Chinese Restaurant",
    "title": "Why Fengshui?",
    "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/ALXWQQvgcUB2ZDnD2cKMHQ/o.jpg","url":"https://www.yelp.com/biz/good-fortune-chinese-restaurant-newark?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4.5,"price":"$$","address":"39135 Cedar Blvd Newark, CA 94560","phone":"(510) 894-0742","distance":2184.4145656019614,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5231,"longitude":-122.00605}
  },
  {
    "_id":"5b662dc37962d11e33281b65",
    "id":"ZMdteLcR8y2N-oJAd9cmEg",
    "name":"Souvlaki's Greek Skewers",
    "title": "Who does not like Greek food?",
  "image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/ZT-h3Z9ft45qqd91M-toRw/o.jpg","url":"https://www.yelp.com/biz/souvlakis-greek-skewers-san-jose?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Greek","rating":4.5,"price":"$","address":"577 W Alma Ave San Jose, CA 95125","phone":"(408) 289-1452","distance":819.9584342179907,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.3092867427984,"longitude":-121.887104945135}
},
{
  "_id":"5b662dc37962d11e33281b67","id":"1vMgajRAI3lYwuCeGX58oQ","name":"Evvia Estiatorio","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/wpqKG1BGGnFeKAZ8I2PkhQ/o.jpg","url":"https://www.yelp.com/biz/evvia-estiatorio-palo-alto?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Greek","rating":4.5,"price":"$$$","address":"420 Emerson St Palo Alto, CA 94301","phone":"(650) 326-0983","distance":28479.14782141714,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.445077,"longitude":-122.163778}},{"_id":"5b662dc37962d11e33281b6c","id":"2o52fN_0cTsEIlf2ilefAw","name":"El Greco Grill","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/EhTC9x2L3Jx49uHSoWiQiw/o.jpg","url":"https://www.yelp.com/biz/el-greco-grill-campbell?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Greek","rating":4.5,"price":"$$","address":"2325 Winchester Blvd Campbell, CA 95008","phone":"(408) 412-8583","distance":6986.022987795307,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.28095,"longitude":-121.9502}},{"_id":"5b662dc37962d11e33281b73","id":"ZmM1Wrs-WNsOmisliNVBzg","name":"Organic Choice Mediterranean","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/GO8HwtqmwCnz4vD8-YH3ww/o.jpg","url":"https://www.yelp.com/biz/organic-choice-mediterranean-san-jose?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Greek","rating":4.5,"price":"$$","address":"385 Kiely Blvd San Jose, CA 95129","phone":"(408) 248-1525","distance":7856.568703400143,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.3199951,"longitude":-121.97321}},{"_id":"5b4d4b61de381f06ee96d00d","id":"7BlSd63UNfopUCwSAQfVBw","name":"Teo Chow Noodle Shack","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/5mX55pEPckIoNhTsp8tv0A/o.jpg","url":"https://www.yelp.com/biz/teo-chow-noodle-shack-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$","address":"4165 Cushing Pkwy Fremont, CA 94538","phone":"(510) 657-2800","distance":5870.89789534265,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.491239,"longitude":-121.949975}},{"_id":"5b4d4b61de381f06ee96d00e","id":"yKpUdq-5cP5KJRq_MOw86Q","name":"Din Ding Dumpling House","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/0DQQkFx6mFDQICAxxH72JQ/o.jpg","url":"https://www.yelp.com/biz/din-ding-dumpling-house-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Shanghainese","rating":4,"price":"$$","address":"3213 Walnut Ave Fremont, CA 94538","phone":"(510) 797-8122","distance":1798.1792315438197,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.550794,"longitude":-121.980952}},{"_id":"5b4d4b61de381f06ee96d00c","id":"nuopHlysRJSfJCKy8zyH5w","name":"Tasty Restaurant","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/gywM35yShDUzegl-IkDkyA/o.jpg","url":"https://www.yelp.com/biz/tasty-restaurant-newark?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$","address":"5576 Newpark Mall Newark, CA 94560","phone":"(510) 505-9981","distance":1704.7917615018348,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5230818456164,"longitude":-121.998411230743}},{"_id":"5b4d4b61de381f06ee96d012","id":"dtxsdk42F66vl0YnwoSWlw","name":"Ping's Bistro","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/Z_zr_t1pOWyv4bAE4RL9gQ/o.jpg","url":"https://www.yelp.com/biz/pings-bistro-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$$","address":"34145 Fremont Blvd Charter Square Shopping Center","phone":"(510) 744-9988","distance":6742.501757709532,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5752480619956,"longitude":-122.044211182803}},{"_id":"5b4d4b61de381f06ee96d00f","id":"UZsivgkqvhuF5hWLWsy4ZA","name":"Eastern Winds Chinese Restaurant","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/E0RSTedma4osDbBLUK61jA/o.jpg","url":"https://www.yelp.com/biz/eastern-winds-chinese-restaurant-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$","address":"40723 Grimmer Blvd Fremont, CA 94538","phone":"(510) 651-6678","distance":1694.6363668531005,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5344039,"longitude":-121.967507}},{"_id":"5b4d4b61de381f06ee96d011","id":"q4TFULSMVoebvbJfnCYzmQ","name":"Shinry Lamian","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/o0nAYUcn11N4YjUQc6rnjg/o.jpg","url":"https://www.yelp.com/biz/shinry-lamian-fremont-3?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$$","address":"3625 Thornton Ave Fremont, CA 94536","phone":"(510) 792-6660","distance":3718.311837386238,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.56291,"longitude":-122.01009}},{"_id":"5b4d4b61de381f06ee96d010","id":"BOCg44e1AtrJLkleSg4s6Q","name":"Hakka Cuisine","image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/ddNL3e_0FrqpIP89-3y6WA/o.jpg","url":"https://www.yelp.com/biz/hakka-cuisine-fremont-2?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$$","address":"43755 Boscell Rd Fremont, CA 94538","phone":"(510) 668-0898","distance":4074.644937059748,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5005668,"longitude":-121.9730491}},{"_id":"5b4d4b61de381f06ee96d017","id":"DyCafEyqKNvVWqyhDyUcKg","name":"Li Zhou Chinese Restaurant","image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/XP29BmnLgLE-_mmDF6bzug/o.jpg","url":"https://www.yelp.com/biz/li-zhou-chinese-restaurant-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Chinese","rating":4,"price":"$$","address":"36456 Fremont Blvd Fremont, CA 94536","phone":"(510) 320-5099","distance":3922.6841761260266,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.56276,"longitude":-122.01523}},{"_id":"5b4d4b61de381f06ee96d018","id":"oa0k4i-zi_TdE-DQvCJNmg","name":"Bing's Dumpling","image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/3fzHlbIH1MGAdCHyf9uZRA/o.jpg","url":"https://www.yelp.com/biz/bings-dumpling-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Dim Sum","rating":4,"price":"$$","address":"34360 Fremont Blvd Fremont, CA 94555","phone":"(510) 320-5360","distance":6494.113036125059,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.5752032935909,"longitude":-122.040460221469}},{"_id":"5b4d4b61de381f06ee96d016","id":"UcpHsvR9XrVXF8qkm7ZHbQ","name":"Shanghai Flavor","image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/zMG1WPT8s94jcltei66ZvQ/o.jpg","url":"https://www.yelp.com/biz/shanghai-flavor-fremont?adjust_creative=Ls3ZoCSwrcmjGfoPgwHxpQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Ls3ZoCSwrcmjGfoPgwHxpQ","category":"Shanghainese","rating":4,"price":"$$","address":"46132 Warm Springs Blvd Ste 165","phone":"(510) 353-1013","distance":6753.557560781874,"notes":"","favorite":false,"interested":false,"__v":0,"coordinates":{"latitude":37.4933045,"longitude":-121.9313488}}]

export default eventsData;