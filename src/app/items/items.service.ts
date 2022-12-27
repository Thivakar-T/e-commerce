import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private URL = environment.API_URL
  private itemspost = this.URL + '/api/items/create'
  private getbyitems = this.URL + '/api/items/getList'
  private deleteitems = this.URL + '/api/items/delete'
  // private updateunit = this.URL + '/api/unit/update'
  private getitemsbyid = this.URL + '/api/items/get'
  constructor(private http: HttpClient) { }

  public getByitems() {
    return this.http.get(this.getbyitems)
  }

  public createitems(form: any) {
    return this.http.post<any>(this.itemspost, form)
  }

  deleteData(id: any) {
    return this.http.put<any>(this.deleteitems + '/' + id, id)
  }

  editgetByitems(id: any) {
    return this.http.get<any>(this.getitemsbyid + '/' + id);
  }
  // updatelist(bedForm: any) {
  //   return this.http.put<any>(this.updateunit, bedForm );

  // }
}
