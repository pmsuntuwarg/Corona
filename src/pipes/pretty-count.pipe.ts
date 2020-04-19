import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'prettyCount'
})
export class PrettyCountPipe implements PipeTransform {

  transform(value: number) {
    let numberString = value.toString();

    if (numberString.length <= 3) {
      return numberString;
    }

    const lengthOfNumber = numberString.length;
    let firstComma = lengthOfNumber % 3;
    firstComma = firstComma === 0 ? 3 : firstComma;
    let nextComma = firstComma + 4;

    for (let i = 0; i < Math.ceil(lengthOfNumber / 3); i++) {
      if (i === 0) {
        numberString = numberString.slice(0, firstComma) + ',' + numberString.slice(firstComma);
      } else if (nextComma < lengthOfNumber){
        numberString = numberString.slice(0, nextComma) + ',' + numberString.slice(nextComma);
        nextComma = nextComma + 4;
      }
    }

    return numberString;
  }
}
