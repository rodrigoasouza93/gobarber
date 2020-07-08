import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmetDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmetDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
