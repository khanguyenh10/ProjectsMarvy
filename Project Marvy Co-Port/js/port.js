  var data = [{
            ow: "ar",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "ar",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/large-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/small-image.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        },{
            ow: "ar-fun",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "vr",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "vr",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "360",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "360",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "website",
            indus: "f&b",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }, {
            ow: "website",
            indus: "cosmetics",
            img: "./images/galaxy.jpg",
            title: "We're group",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, deserunt.",
        }];

         getAll();
        var parentFilter;

        function getAll() {
            var text = "";
            parentFilter = [];
            for (var i = 0; i < data.length; i++) {
                
                text += '<div class="col-md-4">'+
                            '<div class="content" style="background-image:url()">'+
                                '<h3 class="content-title">'+ data[i].ow + '/'+data[i].title + '</h3>'+
                                '<span class="content-subtitle">'+ data[i].content + '</span>'+
                                '<div class="tag">'+
                                '<span class="ourwork-tag">'+ data[i].ow +'</span>'+
                                '<span class="industry-tag">'+ data[i].indus +'</span>'+
                                '</div>'+
                                '<a class="in-detail" href="#">In Detail</a>'+
                            '</div>'+
                        '</div>';
                parentFilter[i] = data[i];
            }
            document.getElementById("categories_contents").innerHTML = text;
        }


        function getOurWorks(key) {
            //get data by fillter   
            var text = "";
            parentFilter = data.filter(d => d.ow == key);

            // if key not ar-fun
            if(key != 'ar-fun'){
                for (var i = 0; i < parentFilter.length; i++) {

                    text += '<div class="col-md-4">'+
                    '<div class="content" style="background-image:url()">'+
                    '<h3 class="content-title">'+ parentFilter[i].ow + '/'+ parentFilter[i].title + '</h3>'+
                    '<span class="content-subtitle">'+ parentFilter[i].content + '</span>'+
                    '<div class="tag">'+
                    '<span class="ourwork-tag">'+ parentFilter[i].ow +'</span>'+
                    '<span class="industry-tag">'+ parentFilter[i].indus +'</span>'+
                    '</div>'+
                    '<a class="in-detail" href="#">In Detail</a>'+
                    '</div>'+
                    '</div>';

                }
            }else{
                var text_in = "";
                text += '<div class="col-md-12 ">' +
                            '<div class="port-ar grid-container">';

                    for (var i = 0; i < parentFilter.length; i++) {
                             if(i == 0 || (i+1)%15 == 0)
                             {
                                text_in  += '<div class="grid-item " style="background-image: url('+ parentFilter[i].img +');">' +
                                                '<div class="overlay"></div>' +
                                                '<div class="large-hover">' +
                                                    '<a href="#" class="in-detail">In Detail</a>' +
                                                        '<a href="#" class="try-now">Try now</a>' +
                                                '</div>' +
                                                '<div class="tag">' +
                                                    '<span class="ourwork-tag">'+ parentFilter[i].ow +'</span>' +
                                                    '<span class="industry-tag">'+ parentFilter[i].indus +'</span>' +
                                                '</div>' +
                                            '</div>';
                             }
                             else{
                                text_in  += '<div class="grid-item" style="background-image: url('+ parentFilter[i].img +');">' +
                                                '<div class="overlay"></div>' +
                                                '<div class="small-hover child">' +
                                                    '<a href="#" class="try-now">Try now</a>' +
                                                '</div>' +
                                            '</div>';
                             }
                    }    

                text += text_in;
                text +=   '</div>' + 
                       '</div>' ;

            }
            //see more
            text += '<div class="col-md-12 text-right ">'+
                        '<div class="see-more pr-3">'+
                            '<a href="#"><h3>See more <i class="fas fa-angle-double-down"></i></h3></a>'+
                        '</div>'+
                    '</div>';

            document.getElementById("categories_contents").innerHTML = text;
        }

        function checkParentFiler(key){
            for(var i = 0; i<parentFilter.length ; i++ ){
                if(parentFilter[i].ow == key) return true;
                if(parentFilter[i].ow != 'all') return false;
            }
        }

        function getIndustries(key) {
            var text = "";
            //get data by fillter 
            var childFilter = parentFilter.filter(d => d.indus == key);
            var x =  this.event.srcElement.innerText;
            //if key not ar-fun
             if(!checkParentFiler('ar-fun')){
                     //display first column 
                 text += '<div class="col-md-4">'+
                            '<div class="content first-content">'+
                                '<h3 class="content-title">Marvy\'s solution for</h3>'+
                                    '<i class="fas fa-dizzy"></i>'+
                                        '<span class="content-subtitle">'+ key + '</span>'+
                            '</div>'+
                        '</div>';

               
                for (var i = 0; i < childFilter.length; i++) {


                    text += '<div class="col-md-4">'+
                                '<div class="content" style="background-image:url()">'+
                                    '<h3 class="content-title">'+ childFilter[i].ow + '/'+ childFilter[i].title + '</h3>'+
                                    '<span class="content-subtitle">'+ childFilter[i].content + '</span>'+
                                    '<div class="tag">'+
                                    '<span class="ourwork-tag">'+ childFilter[i].ow +'</span>'+
                                    '<span class="industry-tag">'+ childFilter[i].indus +'</span>'+
                                    '</div>'+
                                    '<a class="in-detail" href="#">In Detail</a>'+
                                '</div>'+
                            '</div>';
                }

             }
             else{
                var text_in = "";
                text += '<div class="col-md-12 ">' +
                            '<div class="port-ar grid-container">';

                    for (var i = 0; i < childFilter.length; i++) {
                             if(i == 0 || (i+1)%15 == 0)
                             {
                                text_in  += '<div class="grid-item " style="background-image: url('+ childFilter[i].img +');">' +
                                                '<div class="overlay"></div>' +
                                                '<div class="large-hover">' +
                                                    '<a href="#" class="in-detail">In Detail</a>' +
                                                        '<a href="#" class="try-now">Try now</a>' +
                                                '</div>' +
                                                '<div class="tag">' +
                                                    '<span class="ourwork-tag">'+ childFilter[i].ow +'</span>' +
                                                    '<span class="industry-tag">'+ childFilter[i].indus +'</span>' +
                                                '</div>' +
                                            '</div>';
                             }
                             else{
                                text_in  += '<div class="grid-item" style="background-image: url('+ childFilter[i].img +');">' +
                                                '<div class="overlay"></div>' +
                                                '<div class="small-hover child">' +
                                                    '<a href="#" class="try-now">Try now</a>' +
                                                '</div>' +
                                            '</div>';
                             }
                    }    

                text += text_in;
                text +=   '</div>' + 
                       '</div>' ;

             }
           
            //see more
            text += '<div class="col-md-12 text-right ">'+
                        '<div class="see-more pr-3">'+
                            '<a href="#"><h3>See more <i class="fas fa-angle-double-down"></i></h3></a>'+
                        '</div>'+
                    '</div>';

            document.getElementById("categories_contents").innerHTML = text;
        }

        // active ourworks
        var btns = document.querySelectorAll(".ourworks .btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }