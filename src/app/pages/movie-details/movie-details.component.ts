import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
}) 

  export class MovieDetailsComponent implements OnInit {
  
  

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  
  
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);

    
    
  }


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

        this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});
        console.log(this.getMovieDetailResult.genres); 

    });
  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
   /* getMovie(id: any) {
    this.service.getMovieDetailsExtended(id).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = await result;
  
      this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
      this.meta.updateTag({ name: 'title', content: this.getMovieDetailResult.original_title });
      this.meta.updateTag({ name: 'description', content: this.getMovieDetailResult.overview });
  
     
      this.meta.updateTag({ property: 'og:type', content: "website" });
      this.meta.updateTag({ property: 'og:url', content: window.location.href });
      this.meta.updateTag({ property: 'og:title', content: this.getMovieDetailResult.original_title });
      this.meta.updateTag({ property: 'og:description', content: this.getMovieDetailResult.overview });
      this.meta.updateTag({ property: 'og:image', content: `https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}` });
  

    });
  }
 } */

  /* import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
  import { Title, Meta } from '@angular/platform-browser';
  
  @Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
  })
  export class MovieDetailsComponent implements OnInit {
  
    constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private title: Title, private meta: Meta) { }
  
    getMovieDetailResult: any;
    movieVideoUrl: string = '';
    getMovieCastResult: any[] = [];
  
    ngOnInit(): void {
      let getParamId = this.router.snapshot.paramMap.get('id');
      this.getCompleteMovieDetails(getParamId);
    }
  
    getCompleteMovieDetails(id: any) {
      this.service.getCompleteMovieDetails(id).subscribe(async (result) => {
        console.log(result, 'getCompleteMovieDetails#');
        this.getMovieDetailResult = await result;
  
        this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({ name: 'title', content: this.getMovieDetailResult.original_title });
        this.meta.updateTag({ name: 'description', content: this.getMovieDetailResult.overview });
  
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:url', content: window.location.href });
        this.meta.updateTag({ property: 'og:title', content: this.getMovieDetailResult.original_title });
        this.meta.updateTag({ property: 'og:description', content: this.getMovieDetailResult.overview });
        this.meta.updateTag({ property: 'og:image', content: `https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}` });
  
        result.videos.results.forEach((video: any) => {
          if (video.type !== 'Trailer') {
            this.movieVideoUrl = `https://www.themoviedb.org/video/watch?id=${video.key}`;
            return;
          }
        });
  
        this.getMovieCastResult = result.credits.cast;
      });
    }
  }
  
  

 */



