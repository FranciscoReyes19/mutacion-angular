import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adn} from '../models/adn';
import {global} from './global';

@Injectable()
export class AdnService {
    public url:string;
    public shorturl:string;
	
	constructor(
		private _http:HttpClient
		){
        this.url = global.url;
        this.shorturl = global.shorturl;
    }

    prueba(){
    	return "hola desde el servicio";
    }

    create(token, adn): Observable<any>{
    	//remplazar html entities to UTF-8 >>INICIO
        adn.content = global.htmlEntities(adn.content);
        //remplazar html entities to UTF-8 >>FIN
        let json = JSON.stringify(adn);
    	let params = ""+json;
    	let headers = new HttpHeaders().set('Content-Type','application/json')
    	                               .set('Authorization',token);

       return this._http.post(this.shorturl+'mutation',params,{headers: headers});

    }
    
    
    /*
    getPosts(): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.get(this.url+'post',{headers:headers});

    }
    */
}