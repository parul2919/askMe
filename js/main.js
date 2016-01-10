var navData ="";
var colorData ="";
var sizeData ="";
var url =  'http://localhost/parulGupta/askMe/test.json';
 $.getJSON(url, function(jd) {
    
	for (i=0; i<jd.category.length; i++){
		navData += "<div class='filters-list '><span class='custom-checkbox'><input type='checkbox' value='None' id='"+jd.category[i]+"' name='check' /><label for='"+jd.category[i]+"'></label></span>"
				+"<a href='#' class='filter-name'>"+ jd.category[i]+"</a>  </div>";
	}
	for (i=0; i<jd.colors.length; i++){
		colorData += "<li class='filters-list  col-xs-12 reset-padding '><span style='background-color:"+ jd.colors[i]+"' class='color-circle'> &nbsp;</span>"
				+"<a href='#' class='filter-name'>"+ jd.colors[i]+"</a>  </li>";
	}
	for (i=0; i<jd.sizes.length; i++){
		sizeData += "<div class='filters-list col-xs-12  '><span class='custom-checkbox'><input type='checkbox' value='None' id='"+jd.sizes[i]+"' name='check' /><label for='"+jd.sizes[i]+"'></label></span>"
				+"<a href='#' class='filter-name'>"+ jd.sizes[i]+"</a>  </div>";
	}
	$('#categoryNav').html(navData);
	$('#colors').html(colorData);
	$('#sizes').html(sizeData);
});

//product tuple json

var products =[ 
{
	"image":"../img/askMe1.jpg",
	"title":"Fluted Hem Dress",
	"productPrice":"$39",
	"attributes":{
		"size": ['xs','s','m','l'],
		"colors": ["Blue", "Brown", "Green", "Grey", "Orange"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe2.jpg",
	"title":"Brown jacket",
	"productPrice":"$80",
	"attributes":{
		"size": ['m','l','xxl'],
		"colors": ["Brown", "Green", "black"],
	},
	"collectionType":"winder dress"
},
{
	"image":"../img/askMe3.jpg",
	"title":"Flowy shirt Dress",
	"productPrice":"$52",
	"attributes":{
		"size": ["xs","s",'m',"l", "xl", "xxl"],
		"colors": ["Blue", "Grey", "red", "white"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe4.jpg",
	"title":"Bead detail dress",
	"productPrice":"$49",
	"attributes":{
		"size": ['xs','m','l'],
		"colors": ["Blue", "Orange"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe5.jpg",
	"title":"Plated detail dress",
	"productPrice":"$22",
	"attributes":{
		"size": ['l', 'xl', 'xxl'],
		"colors": ["red", "black", "green", "yellow"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe6.jpg",
	"title":"Printed Line Dress",
	"productPrice":"$37",
	"attributes":{
		"size": ['xs','s','m','l'],
		"colors": ["Blue", "Brown", "Green", "Grey", "Orange"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe7.jpg",
	"title":"Fluted Hem Dress",
	"productPrice":"$39",
	"attributes":{
		"size": ['xs','s','m','l'],
		"colors": ["Blue", "Brown", "Green", "Grey", "Orange"],
	},
	"collectionType":"summer dress"
},
{
	"image":"../img/askMe8.jpg",
	"title":"White shrug dress",
	"productPrice":"$44",
	"attributes":{
		"size": ['xs','l', 'xxl'],
		"colors": ["Blue", "blue", "Orange"],
	},
	"collectionType":"autum winter dress"
},
]

var productData ="";
for (j=0; j<products.length; j++){
productData += "<div class='col-xs-6 product-tuple'  id='productTuple"+j+"'><div class='tupleData'><div class='product-image'> <img src='"+products[j].image+"'></div> "
			+"<div class='product-desc'><h3 class='product-title'><span class='title'>"+products[j].title+"</span> <span class='product-price'>"+products[j].productPrice+"</span></h3><p class='product-info'>"+products[j].collectionType+"</p></div>"
			+"<div class='hover-info'>"
			+"<div class='button-section'><input type='button' class=' addToCart tuple-button' value='add to cart'/><input type='button' class='tuple-button viewGallery' value='view gallery'/></div>"
			+"<div class='product-detailed-info'>"
			+"<h3 class='product-title'>"+products[j].title+"<span class='product-price'>"+products[j].productPrice+"</span></h3>"
			+"<p class='product-info'>"+products[j].collectionType+"</p>"
			+"<div class='product-attr'>"
			+"<div class='attr-section'><h4 class='product-title'>Sizes</h4><div class='attr-value'>";
			for(k=0; k<products[j].attributes.size.length; k++){
				productData += "<span>"+products[j].attributes.size[k];
			if( k+1 != products[j].attributes.size.length ){
productData +=",";
			}
productData +="</span>";
			};
productData += "</div></div><div class='attr-section'> <h4 class='product-title'>colors</h4><div class='color-attr'>";
			for (l=0; l<products[j].attributes.colors.length; l++){
				productData += "<span style='background-color:"+ products[j].attributes.colors[l]+"' class='color-circle'> &nbsp;</span>";
			};
productData += "</div></div></div></div></div></div> <div class='view-gallery'> <img src='"+products[j].image+"'/> <div class='cross col-xs-2 reset-padding'>&#x2716;</div> </div> </div>";
};
$('.product-listing').html(productData);

function addToCart(){
	$('.button-section').on( "click", ".addToCart", function() {
		var $productParent = $(this).parents('.product-tuple');
		var $clonedTuple = $('.animated-product-tuple');
		var $tuplePosition = $productParent.offset();
		var $cartProduct = $('.cart-section');
		var $currProdImg = $productParent.find('.product-image img').attr('src');
		var $currProdTitle = $productParent.find('.product-desc .product-title .title').text();
		var $currProdPrice = $productParent.find('.product-desc .product-price').text();
		var $cartOffset = $('.cart-row').offset();
		$productParent.clone().appendTo( $clonedTuple );
		$clonedTuple.css({"top": $tuplePosition.top, "left": $tuplePosition.left});
		$clonedTuple.animate({ "left":$cartOffset.left, "top":$cartOffset.top-50, "width":0, "height": 0, "opacity":0 },1000,function(){$clonedTuple.html("").removeAttr("style")});
		$('.cart-empty-txt').fadeOut(200).addClass('hidden');
		$cartProduct.append("<div class='added-product-section opacity clearfix'><div class='prod-img col-xs-6'><img src='"+$currProdImg+"' /></div><div class='prod-desc col-xs-16'>" 
		+"<p class=''>"+$currProdTitle+"</p><p class='product-price'>"+$currProdPrice+"</p></div><div class='cross col-xs-2 reset-padding'>&#x2716;</div></div>");
		$('.added-product-section').on( "click", ".cross", function() {
			
			var $cartParent = $(this).parents('.added-product-section');
			$cartParent.removeClass('opacity');
			setTimeout(function(){
				$cartParent.remove();
				if($('.added-product-section').size()==0){
				$('.cart-empty-txt').fadeIn(200).removeClass('hidden');
			}
			}, 600);
			
			
		});
		
});

}

function viewGallery(){
	$('.button-section').on( "click", ".viewGallery", function() {
		var $productParent = $(this).parents('.product-tuple');
		console.log('hi');
		$productParent.addClass("flippingAnimate");
		$productParent.find('.view-gallery').css('display','block');
		$productParent.find('.hover-info').addClass('hidden');
		$productParent.find('.cross').click(function(){
			$productParent.	removeClass("flippingAnimate");
			$productParent.find('.hover-info').removeClass('hidden');
		});
	});
}

 addToCart();
 viewGallery();