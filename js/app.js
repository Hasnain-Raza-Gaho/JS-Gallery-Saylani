var i = 1;

function next() {
    i++;
    
    if (i == 2){
    
        document.getElementById('image').src = './Images/Image (2).jpg'
        document.getElementById('pre').removeAttribute('disabled')
        }
    
    
    
        if (i==3){
            document.getElementById('image').src = './Images/Image (3).jpg'

            
        }
    
        
        if (i==4){
            document.getElementById('image').src = './Images/Image (4).jpg'
            
        }
    
    
    
    
        if (i==5){
            document.getElementById('image').src = './Images/Image (5).jpg'
            
        }
    
    
    
    
        if (i==6){
            document.getElementById('image').src = './Images/Image (6).jpg'
            
        }
    
    
    
    
        if (i==7){
            document.getElementById('image').src = './Images/Image (7).jpg'
            
        }
    
    
    
    
        if (i==8){
            document.getElementById('image').src = './Images/Image (8).jpg'
            
        }
    
    
    
    
        if (i==9){
            document.getElementById('image').src = './Images/Image (9).jpg'
        
        }
    
    
    
    
        if (i==10){
            document.getElementById('image').src = './Images/Image (10).jpg'
            document.getElementById('next').setAttribute('disabled',true)
            
        }
    
    
    

}


function pre() {
    i--;
    if (i == 1){
    document.getElementById('image').src = '/Images/Image (1).jpg'
    document.getElementById('pre').setAttribute('disabled',true)
}

if (i == 2){

    document.getElementById('image').src = '/Images/Image (2).jpg'
    document.getElementById('pre').removeAttribute('disabled')
    }

    
    if (i==3){
        document.getElementById('image').src = './Images/Image (3).jpg'

        
    }

    
    if (i==4){
        document.getElementById('image').src = './Images/Image (4).jpg'
        
    }




    if (i==5){
        document.getElementById('image').src = './Images/Image (5).jpg'
        
    }




    if (i==6){
        document.getElementById('image').src = './Images/Image (6).jpg'
        
    }




    if (i==7){
        document.getElementById('image').src = './Images/Image (7).jpg'
        
    }




    if (i==8){
        document.getElementById('image').src = './Images/Image (8).jpg'
        
    }




    if (i==9){
        document.getElementById('image').src = './Images/Image (9).jpg'
    document.getElementById('next').removeAttribute('disabled')

    }
    
    
    
    
    if (i==10){
        document.getElementById('image').src = './Images/Image (10).jpg'
        document.getElementById('next').removeAttribute('disabled')
        
    }




}