export default interface IMailProvider {
  sendMail(to: string, boyd: string): Promise<void>;
}
