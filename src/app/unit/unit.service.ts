import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  

 



  private URL = environment.API_URL
  private unitpost = this.URL + '/api/unit/create'
  private getbyunit = this.URL + '/api/unit/getUnitList'
  private deleteunit = this.URL + '/api/unit/delete'
  private updateunit = this.URL + '/api/unit/update'
  private getunitbyid = this.URL + '/api/unit/get'
  constructor(private http: HttpClient) { }

  public getByunit() {
    return this.http.get(this.getbyunit)
  }

  public createunit(unitform: any) {
    return this.http.post<any>(this.unitpost, unitform)
  }

  deleteData(id: any) {
    return this.http.put<any>(this.deleteunit + '/' + id, id)
  }

  editgetByunit(id: any) {
    return this.http.get<any>(this.getunitbyid + '/' + id);
  }
  updatelist(bedForm: any) {
    return this.http.put<any>(this.updateunit, bedForm );

  }

}



