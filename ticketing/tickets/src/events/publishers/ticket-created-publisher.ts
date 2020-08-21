import { Publisher, Subjects, TicketCreatedEvent } from '@mooping/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
