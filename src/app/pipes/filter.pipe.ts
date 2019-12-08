import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista;
    return lista.filter(movie =>
      movie.title.toUpperCase().includes(texto.toUpperCase())
    );

    // if (arg.length < 2) return value;
    // const resultAll = [];
    // const search = {
    //   title: "",
    //   genre: ""
    // };
    // for (const all of value) {
    //   if (all.title.toLowerCase().indexOf(arg) > -1) {
    //     resultAll.push(all);
    //   }
    // }
    // return resultAll;
  }
}
