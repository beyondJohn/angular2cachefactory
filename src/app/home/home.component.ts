import { Component, OnInit } from '@angular/core';
import { CacheFactory } from'cachefactory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _cache: CacheFactory
  ) { }
  cacheFactory = new CacheFactory();
  cache;
  myitem = {text:'item1',data:{mydata:'hello'}};
  ngOnInit(){
    this.cache = !this.cacheFactory.exists('my-cache')
    ? this.cacheFactory.createCache('my-cache', {
      deleteOnExpire: 'aggressive',
      recycleFreq: 60 * 1000
    })
    : this.cache = this.cacheFactory.get("my-cache");
    
  }
  put(){
    this.cache.put("my-cache-item", this.myitem);
  }
  get(){
    this.cache.get("my-cache-item");
  }
  remove(){
    this.cache.remove("my-cache-item");
  }
  destroycache(){
    this.cache.destroy();
  }
}
