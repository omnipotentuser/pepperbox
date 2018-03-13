
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'route-66-promotions.myshopify.com',
      apiKey: 'de4a25cc48633ca9740f7ebcf4212340',
      appId: '6',
    });

   ShopifyBuy.UI.onReady(client).then(function (ui) {
      
      // Tank Chamber
      ui.createComponent('product', {
        id: [442055917606],
        node: document.getElementById('product-component-c2686e3eb91'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
	  "product": {
	    "layout": "horizontal",
	    "variantId": "all",
	    "width": "100%",
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "description": true,
	      "buttonWithQuantity": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"text-align": "left",
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0",
		  "margin-bottom": "50px"
		}
	      },
	      "title": {
		"font-size": "26px"
	      },
	      "price": {
		"font-size": "18px"
	      },
	      "compareAt": {
		"font-size": "15px"
	      }
	    }
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "footer": {
		"background-color": "#ffffff"
	      }
	    }
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0px",
		  "margin-bottom": "0px"
		}
	      }
	    }
	  },
	  "productSet": {
	    "styles": {
	      "products": {
		"@media (min-width: 601px)": {
		  "margin-left": "-20px"
		}
	      }
	    }
	  }
	}
      });
      
      // Coffee with a Bang!
      ui.createComponent('product', {
        id: [442045530150],
        node: document.getElementById('product-component-21e90920558'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
	  "product": {
	    "layout": "horizontal",
	    "variantId": "all",
	    "width": "100%",
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "description": true,
	      "buttonWithQuantity": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"text-align": "left",
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0",
		  "margin-bottom": "50px"
		}
	      },
	      "title": {
		"font-size": "26px"
	      },
	      "price": {
		"font-size": "18px"
	      },
	      "compareAt": {
		"font-size": "15px"
	      }
	    }
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "footer": {
		"background-color": "#ffffff"
	      }
	    }
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0px",
		  "margin-bottom": "0px"
		}
	      }
	    }
	  },
	  "productSet": {
	    "styles": {
	      "products": {
		"@media (min-width: 601px)": {
		  "margin-left": "-20px"
		}
	      }
	    }
	  }
	}
      });
      
      // Hot, Cold, and Ugly
      ui.createComponent('product', {
        id: [445199024166],
        node: document.getElementById('product-component-60a65c95521'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
	  "product": {
	    "layout": "horizontal",
	    "variantId": "all",
	    "width": "100%",
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "description": true,
	      "buttonWithQuantity": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"text-align": "left",
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0",
		  "margin-bottom": "50px"
		}
	      },
	      "title": {
		"font-size": "26px"
	      },
	      "price": {
		"font-size": "18px"
	      },
	      "compareAt": {
		"font-size": "15px"
	      }
	    }
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "footer": {
		"background-color": "#ffffff"
	      }
	    }
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0px",
		  "margin-bottom": "0px"
		}
	      }
	    }
	  },
	  "productSet": {
	    "styles": {
	      "products": {
		"@media (min-width: 601px)": {
		  "margin-left": "-20px"
		}
	      }
	    }
	  }
	}
      });

      
      // Pepperbox Coffee - Coffee with a Bang
      ui.createComponent('product', {
        id: [442078691366],
        node: document.getElementById('product-component-bea814e28fa'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
	  "product": {
	    "layout": "horizontal",
	    "variantId": "all",
	    "width": "100%",
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "description": true,
	      "buttonWithQuantity": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"text-align": "left",
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0",
		  "margin-bottom": "50px"
		}
	      },
	      "title": {
		"font-size": "26px"
	      },
	      "price": {
		"font-size": "18px"
	      },
	      "compareAt": {
		"font-size": "15px"
	      }
	    }
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "footer": {
		"background-color": "#ffffff"
	      }
	    }
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0px",
		  "margin-bottom": "0px"
		}
	      }
	    }
	  },
	  "productSet": {
	    "styles": {
	      "products": {
		"@media (min-width: 601px)": {
		  "margin-left": "-20px"
		}
	      }
	    }
	  }
	}
      });
      
      // Original Pepperbox Coffee
      
      ui.createComponent('product', {
        id: [442067484710],
        node: document.getElementById('product-component-1514472263598'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });

      // Tumbler
      ui.createComponent('product', {
        id: [451338600486],
        node: document.getElementById('product-component-1514485338489'),
        moneyFormat: '${{amount}}',
        options: {"product":{"layout":"horizontal","variantId":"all","width":"100%","contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"description":true,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"styles":{"footer":{"background-color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}}},
      });

      // Campfire Mug
      ui.createComponent('product', {
        id: [1011979157547],
        node: document.getElementById('product-component-ccc3f842ec0'),
        moneyFormat: '${{amount}}',
	options: {
	  "product": {
	    "buttonDestination": "checkout",
	    "variantId": "all",
	    "contents": {
	      "imgWithCarousel": false,
	      "variantTitle": false,
	      "description": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "text": {
	      "button": "BUY NOW"
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0",
		  "margin-bottom": "50px"
		}
	      },
	      "button": {
		"font-size": "15px",
		"padding-top": "15.5px",
		"padding-bottom": "15.5px",
		":hover": {
		  "background-color": "#6ca44e"
		},
		":focus": {
		  "background-color": "#6ca44e"
		}
	      },
	      "quantityInput": {
		"font-size": "15px",
		"padding-top": "15.5px",
		"padding-bottom": "15.5px"
	      },
	      "compareAt": {
		"font-size": "12px"
	      }
	    }
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "button": {
		"font-size": "15px",
		"padding-top": "15.5px",
		"padding-bottom": "15.5px",
		":hover": {
		  "background-color": "#6ca44e"
		},
		":focus": {
		  "background-color": "#6ca44e"
		}
	      },
	      "footer": {
		"background-color": "#ffffff"
	      }
	    }
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
		"@media (min-width: 601px)": {
		  "max-width": "100%",
		  "margin-left": "0px",
		  "margin-bottom": "0px"
		}
	      },
	      "button": {
		"font-size": "15px",
		"padding-top": "15.5px",
		"padding-bottom": "15.5px",
		":hover": {
		  "background-color": "#6ca44e"
		},
		":focus": {
		  "background-color": "#6ca44e"
		}
	      },
	      "quantityInput": {
		"font-size": "15px",
		"padding-top": "15.5px",
		"padding-bottom": "15.5px"
	      }
	    }
	  },
	  "toggle": {
	    "styles": {
	      "toggle": {
		":hover": {
		  "background-color": "#6ca44e"
		},
		":focus": {
		  "background-color": "#6ca44e"
		}
	      },
	      "count": {
		"font-size": "15px",
		"color": "#ffffff",
		":hover": {
		  "color": "#ffffff"
		}
	      },
	      "iconPath": {
		"fill": "#ffffff"
	      }
	    }
	  },
	  "productSet": {
	    "styles": {
	      "products": {
		"@media (min-width: 601px)": {
		  "margin-left": "-20px"
		}
	      }
	    }
	  }
	}
      });
    });
  }
})();

