import { Observable } from "rxjs";

const url = "https://www.google.com/";

const request$ = new Observable((observer) => {
  fetch(url)
    .then((response: Response) => {
      return response.ok ? response.text() : "";
    })
    .then((result: string) => {
      if (result) {
        observer.next(result);
        observer.complete();
      } else {
        observer.error("oops!");
      }
    });
});

request$.subscribe({
  next: (result) => {
    console.log(result);
  },
  error: (error) => {
    console.error(error);
  },
  complete: () => {
    console.log("done!");
  },
});
