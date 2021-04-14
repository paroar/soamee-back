conn = new Mongo()

db = conn.getDB("phone")

var phones = [
    {
        "title": "Google Pixel",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-1.png",
        "price": 699,
        "company": "google",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Samsung S7",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-2.png",
        "price": 849,
        "company": "samsung",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "HTC 10",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-3.png",
        "price": 589,
        "company": "htc",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "HTC 10",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-4.png",
        "price": 589,
        "company": "htc",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "HTC Desire 626s",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-5.png",
        "price": 449,
        "company": "htc",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Vintage Iphone",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-6.png",
        "price": 399,
        "company": "apple",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Iphone 7",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-7.png",
        "price": 799,
        "company": "apple",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Xiamomi Redmi Mi 9",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-8.png",
        "price": 499,
        "company": "xiaomi",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Xiamomi Redmi Mi 11",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-9.png",
        "price": 699,
        "company": "xiaomi",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Poco x3 nfc",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-10.png",
        "price": 199,
        "company": "poco",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    },
    {
        "title": "Xiaomi Mi 4i",
        "img": "https://phones-catalogue.s3.eu-west-3.amazonaws.com/product-11.png",
        "price": 269,
        "company": "xiaomi",
        "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit torquent iaculis, euismod habitant per cum sociis donec velit dictum porta, pharetra himenaeos congue tempor lectus commodo nulla mus. Penatibus in est consequat dictumst nostra turpis nulla leo, commodo feugiat elementum convallis augue morbi potenti, sapien diam massa condimentum per odio scelerisque. Litora integer sodales magnis odio arcu conubia tempus class molestie sed, sem turpis mi tellus vehicula congue senectus habitant ad."
    }
]

phones.forEach( p => db.catalogue.save(p))