export default interface Observer {
  update(key: string, value: any): void;
}
