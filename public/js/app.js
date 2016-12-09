"use strict";

class App{
	constructor(){
		this.Destinations_ = [
			{
				"image": "img/cebu.png",
				"Destination": "Cebu",
				"description": " Cebu is a 1st provincial income class island province of the Philippines located in the Central Visayas (Region VII) region, and consisting of the main island itself and 167 surrounding islands and islets. Its capital is Cebu City, the oldest city and first capital of the Philippines, which is politically independent from the provincial government. Cebu City forms part of the Cebu Metropolitan Area together with four neighboring cities (Danao City, Lapu-Lapu City, Mandaue City and Talisay City) and eight other local government units. Mactan-Cebu International Airport, located in Mactan Island, is the second busiest airport in the Philippines.",
				"Price":"PHP 899"			
			},
            {
				"image": "img/davao.png",
				"Destination": "Davao",
				"description": " Davao City is a highly urbanized city on Mindanao, Philippines. As of the 2015 census, it had a population of 1,632,991 people, making it the third-most-populous city in the Philippines and the most populous in Mindanao.[4] It is the center of Metro Davao, the third most populous metropolitan area in the Philippines easy. ",
				"Price":"PHP 1999"	
			},
            {
				"image": "img/kalibo.png",
				"Destination": "Kalibo",
				"description": " Kalibo is a municipality and the provincial capital of the province of Aklan in the Western Visayas (Region VI) of the Philippines. The population was 80,605 at the 2015 census.[3] In the 2016 election, it had 46,096 registered voters. ",
				"Price":"PHP 999"			
			},
			{
				"image": "img/puerto.png",
				"Destination": "Puerto Princesa",
				"description": "Puerto Princesa is a city located in the western provincial island of Palawan, Philippines. Though the provincial seat of government for Palawan, the city itself is one of 38 independent cities within the Philippines not controlled by the province in which it is geographically located and is therefore an independent area located within Palawan. ",
				"Price":"PHP 1599"			
			},
            {
				"image": "img/tacloban.png",
				"Destination": "Tacloban",
				"description": "Tacloban is a 1st city income class highly urbanized city in the Philippines and the provincial capital of Leyte where it is geographically situated but governed administratively independent from it. It is 360 miles (580 km) southeast from Manila. According to the 2015 census, it has a population of 242,089 and is the most populous city in the Eastern Visayas region. In the 2013 election, it had 109,027, 124,777 registered voters. ",
				"Price":"PHP 1059"			
			},
            {
				"image": "img/tagbilaran.png",
				"Destination": "Tagbilaran",
				"description": "Tagbilaran is a 3rd city income class component city in the island province of Bohol, Philippines,[2] serving as its capital. Its income classification has an annual income of ₱240-320 million. According to the 2015 census, it has a population of 105,051.[3] In the 2016 election, it had 59,949 registered voters. ",
				"Price":"PHP 1299"			
			},
            {
				"image": "img/kota.png",
				"Destination": "Kota kinabalu",
				"description": "is the capital of the state of Sabah, Malaysia. It is also the capital of the West Coast Division of Sabah. The city is located on the northwest coast of Borneo facing the South China Sea. The Tunku Abdul Rahman National Park[6] lies to its west and Mount Kinabalu, which gave the city its name, is located to its east. Kota Kinabalu has a population of 452,058 according to the 2010 census;[7] when the adjacent Penampang and Putatan districts are included, the metro area has a combined population of 628,725. ",
				"Price":"PHP 899"			
			},
            {
				"image": "img/hong.png", 
                "Destination": "Hong Kong",
                "description": "Hong Kong is an autonomous territory on the Pearl River Delta of East Asia.[13] Macau lies across the delta to the west, and the Chinese province of Guangdong borders the territory to the north. With a total land area of 1,106 square kilometres (427 sq mi) and a population of over 7.3 million of various nationalities,[14][note 1] it ranks as the world's fourth most densely populated sovereign state or territory. ",
                "Price":"PHP 1499"			
			},
            {
				"image": "img/Seoul.png", 
                "Destination": "Seoul",
                "description": "Seoul is the capital and largest metropolis of the Republic of Korea (commonly known as South Korea), forming the heart of the Seoul Capital Area, which includes the surrounding Incheon metropolis and Gyeonggi province, the world's 16th largest city.[10] It is home to over half of all South Koreans along with 678,102 international residents.[11] ",
                "Price":"PHP 3549"			
			},
            {
				"image": "img/Macau.png", 
                "Destination": "Macau",
                "description": "Macau is bordered by the city of Zhuhai in China to the North and the Pearl River Estuary to the East and South. Hong Kong lies about 64 kilometres (40 mi) to its East across the Delta.[6] With an estimated population of around 647,700 living in an area of 30.5 km² (11.8 sq mi), it is the most densely populated region in the world. ",
                "Price":"PHP 1799"			
			}
		];
	}
    
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
    
    destination(){
		let html = "";
		let m = this.Destinations_;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].Destination}</td>
					<td>${m[i].Price}</td>
					<td><button class="btn btn-primary"  onclick="component.DestinationDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('destination'));
	}
    
    DestinationDetails(key){
		this.reRender(
			`
                    <div id="container">
                        <div id="row">
                            <div id="DestinationDetailsInfo">
                                <div class="col-lg-4 col-xs-12" id="adjustDetails">
                                    <div class="thumbnail"><img src="${this.Destinations_[key].image}"></div>
                                </div>
                                <div class="col-lg-8 col-xs-12" id="adjustDetails1">
                                    <h1 id="slimfont">${this.Destinations_[key].Destination}</h1>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.DestinationUpdate(${key})">Update</button>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.DeleteDestination(${key})">Delete</button>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.showDestinationPage()">Back</button>
                                </div>
                                <div class="col-lg-12 col-xs-12" id="adjust100">
                                    <ul class="list-group">
                                      <li class="list-group-item"><span class="headerDestination"><b>Description:</b></span> ${this.Destinations_[key].description}</li>
                                      <li class="list-group-item"><span class="headerDestination"><b>Price:</b></span> ${this.Destinations_[key].Price}</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
				    	
			`,document.getElementById('DestinationDetails'));
			this.showUpdateDelete();
	}
    
    DestinationCreate(){
		this.render(
			`
				<h1 class="text-center" id="slimfont">Create a description here</h1>
				Image: <input class="form-control" id="newImage" type="" placeholder="Enter Image" /><br/>
				Destination: <input class="form-control" id="newTitle" type="" placeholder="Enter Destination" /><br/>
				Description: <input class="form-control" id="newContent" type="" placeholder="Enter Description" /><br/>
                Price: <input class="form-control" id="newGenre" type="" placeholder="Enter Price" /><br/>
				<button class="btn btn-success" onclick="component.CreateDestination()">Create</button>
                <button class="btn btn-primary" onclick="component.showDestinationPage()">Back to List</button>
			`,document.getElementById('DestinationCreate'));
	}
    
    CreateDestination(){
		let i = document.getElementById('newImage');
		let t = document.getElementById('newTitle');
		let c = document.getElementById('newContent');
		let d = document.getElementById('newDate');
		let a = document.getElementById('newAuthor');
        let g = document.getElementById('newGenre');

		let book = {"image":i.value,"Destination":t.value,"description":c.value,"Price":g.value};
		this.Destinations_.push(book);

		i.value = t.value = c.value = g.value = ''; //Clear Fields
		this.destination();
	}
    
    UpdateDestination(key){
		let i = document.getElementById('updateImage');
		let t = document.getElementById('updateTitle');
		let c = document.getElementById('updateContent');
		let d = document.getElementById('updateDate');
		let a = document.getElementById('updateAuthor');
        let g = document.getElementById('updateGenre');

		let m = this.Destinations_[key];
		let book = {"image":i.value,"Destination":t.value,"description":c.value,"Price":g.value};

		this.Destinations_[key] = book;
		let details = document.getElementById('DestinationDetails');
		details.innerHTML = "";
		
		this.destination();
		this.showDestinationPage();
	}
    
    DestinationUpdate(key){
		this.reRender(
			`
                <div class="container" id="adjustDetails200">
                        <h2 class="text-center" id="slimfont">${this.Destinations_[key].Destination}</h2>
                        Image: <input class="form-control" id="updateImage" type="text" value="${this.Destinations_[key].image}" /><br/>
                        Destination: <input class="form-control" id="updateTitle" type="text" value="${this.Destinations_[key].Destination}" /><br/>
                        Description: <input class="form-control" id="updateContent" type="text" value="${this.Destinations_[key].description}" /><br/>
                        Price: <input class="form-control" id="updateGenre" type="text" value="${this.Destinations_[key].Price}" /><br/>
                        <button class="btn btn-success" onclick="component.UpdateDestination(${key})">Save</button>
                </div>
			`,document.getElementById('DestinationDetailsInfo'));
	}
    
    DeleteDestination(key){		
		let table = document.getElementById('destination');
		table.deleteRow(key);
		this.Destinations_.splice(key,1);

		let details = document.getElementById('DestinationDetails');
		details.innerHTML = "";
		
		this.destination();	
		this.showDestinationPage();	
	}
    
	searchdestination(){
		let txtSearchdestination = document.getElementById('txtSearchdestination')
		let destination = document.getElementById('destination');
		let html = ``;
		    for(let i=0;i<this.Destinations_.length;i++){
		      if(this.Destinations_[i].Destination.toLowerCase().includes(txtSearchdestination.value)||this.Destinations_[i].Price.toLowerCase().includes(txtSearchdestination.value)||this.Destinations_[i].Destination.toUpperCase().includes(txtSearchdestination.value)||this.Destinations_[i].Price.toUpperCase().includes(txtSearchdestination.value)||this.Destinations_[i].Destination.includes(txtSearchdestination.value)||this.Destinations_[i].Destination.includes(txtSearchdestination.value)||this.Destinations_[i].Price.includes(txtSearchdestination.value)){
		      	html +=`
		          <td>${this.Destinations_[i].Destination}</td>
		          <td>${this.Destinations_[i].Price}</td>
		          <td><button class="btn btn-primary"  onclick="component.DestinationDetails(${i})">Show Details</button></td>
		        </tr>`; 
		      }
		    }
    destination.innerHTML = html;
	}

	
}

class Component extends App{
	constructor(){

		super();
	}

	LandingPageDestination(){
		let html = `








		<!-- NAV -->

		<nav class="navbar navbar-inverse navbar-fixed-top navbar-custom btn-navbar">
			<div class="container topnav font">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul  class="nav navbar-nav navbar-left">
						<li>
							<a href="#" onclick="component.showLandingPageDestination()"><p id="face">Home</p></a>
						</li>
						<li>
							<a href="#" onclick="component.showDestinationPage()"><p id="face">Destinations</p></a>
						</li>
						<li>
							<a href="#" onclick="component.showDestinationCreate()"><p id="face">Create</p></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<!-- NAV -->





		<!-- LOGO -->

		<div id="LandingPageDestination">
		<div class="intro-header">

				<div class="row">
					<div class="col-lg-12">
						<div class="intro-image">

						</div>
					</div>
				</div>

		</div>

		<!-- LOGO -->






		<!-- DESCRIPTION -->

		<section id="services">
			<div class="container">
				<div class="row text-center">
						<h2 class="service-heading">Why Travel with us?</h2>
						<p class="text-muted">When it comes to extraordinary travel experiences in Philippines, we are the experts. With dedicated teams and offices in each of our destination countries and over 5 years of experience building unforgettable holidays, we are a travel companion with a difference.
						</p>
					</div>
				</div
			</div>
		</section>

		<!--  DESCRIPTION -->






		<!-- CHARACTERS -->



		<aside class="c">
			<div class="text-vertical-center">
				<h1 id="slimfont">Travel has never been this easy</h1>
			</div>
		</aside>


		<!-- CHARACTERS -->






		<!-- DESCRIPTION -->

		<section id="services">
			<div class="container">
				<div class="row text-center">
						<h2 class="service-heading">24-HOUR ON THE GROUND SUPPORT</h2>
						<p class="text-muted">Travel can be unpredictable, so our teams are dedicated to providing you with support every hour of the day. Whether you need to confirm a booking, make a change or add to your itinerary, our teams are here to help 24/7.
						</p>
					</div>
				</div
			</div>
		</section>

		<!--  DESCRIPTION -->







		<!-- START CHARACTER -->


		`;
        
		for(let index=0;index<0;index++){
		    html+=`
		      <div class="col-xs-12 col-md-4"> 
		        <div class="thumbnail"> 
		          <img src="${this.Destinations_[index].image}"> 
		          <div class="caption">
		            <h3>${this.Destinations_[index].Destination}</h3>
		            <p>${this.Destinations_[index].description}</p>
		          </div>
		        </div>

		`;
		}

		
		html+=`
		</div>
		</div>
		</div>

		<!-- END CHARACTER -->


        <!-- START BOOK PAGE -->
		<div id="DestinationPage" class="display">
		<div class="container" id="adjust1">
		<div class="row">
						<div class="col-xs-12 col-md-12">
							<h1 class="text-center" id="slimfont">Domestic Destination</h1>
						<table class="table table-responsive table-hover" id="adjust2">
						<thead>
						<tr>
							<th>Destination</th>
							<th>Price</th>
						</tr>
					    </thead>

						<div class="input-group stylish-input-group" id="adjustsearch">
						<input oninput="component.searchdestination()" 
						type="text" class="form-control"  placeholder="Search" id="txtSearchdestination">
						<span class="input-group-addon">
						<button type="submit">
						<span class="glyphicon glyphicon-search"></span>
						</button>  
						</span>
						</div>

						<tbody id="destination"></tbody>
						</table>
		</div>
		</div>
		</div>
    	</div>
        <!-- END BOOK PAGE -->







        <!-- START UPDATE-DELETE PAGE -->
        <div id="UpdateDeletePageDestination" class="display">

            <!-- START FULL WIDTH IMAGE - FOLD#1 -->
            <aside id="callout1">
                <div class="text-vertical-center">
                    <h1 id="slimfont">Destination Details</h1>
                </div>
            </aside>
            <!-- END FULL WIDTH IMAGE - FOLD#1 -->

            <div class="container" id="adjust5">
                <div class="row">
                    <div id="DestinationDetails"></div>
                </div>
            </div>

        </div>
        <!-- END UPDATE-DELETE PAGE -->





		<!-- START CREATE PAGE -->
        <div id="LandingPageDestinationDestination" class="display">
        <div class="container" id="adjust5">
        <div class="row">
            <div class="col col-sm-12">
                <div id="DestinationCreate"></div>		
            </div>
        </div>
        </div>
        </div>
        <!-- END CREATE PAGE -->




        <!-- FOOTER -->

		<footer class="footer-distributed">
			<div class="footer-left text-right">
				<p>G2 TRAVEL AGENCY &copy; 2016</p>
			</div>
		</footer>

        <!-- FOOTER -->
		

		`;
		this.reRender(`${html}`,document.getElementById("app"));	
		this.destination();
	}


	showLandingPageDestination(){
		$('#LandingPageDestination').show();
		$('#DestinationPage').hide();
        $('#UpdateDeletePageDestination').hide();
        $('#LandingPageDestinationDestination').hide();
	}

	showDestinationPage(){
		$('#LandingPageDestination').hide();
		$('#DestinationPage').show();
        $('#UpdateDeletePageDestination').hide();
        $('#LandingPageDestinationDestination').hide();
	}
    
    showUpdateDelete(){
		$('#LandingPageDestination').hide();
		$('#DestinationPage').hide();
        $('#UpdateDeletePageDestination').show();
        $('#LandingPageDestinationDestination').hide();
	}
    
    showDestinationCreate(){
        $('#LandingPageDestination').hide();
		$('#DestinationPage').hide();
        $('#UpdateDeletePageDestination').hide();
        $('#LandingPageDestinationDestination').show();
        
    }

}

let component = new Component();
component.LandingPageDestination();
component.DestinationCreate();