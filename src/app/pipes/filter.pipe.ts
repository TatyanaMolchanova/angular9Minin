import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      console.log('empty')
      return posts;
    }
    return posts.filter(post => {
      console.log('in filter');
      // return post.title.toLowerCase().includes(search.toLowerCase());
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
