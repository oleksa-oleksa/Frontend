export class Task {
  constructor(public title: string) {
  }
  public isDone = false;

  toggleIsDone() {
    //alert(`The task: "`+ task + '"is done')
    this.isDone = !this.isDone;
  }
}
