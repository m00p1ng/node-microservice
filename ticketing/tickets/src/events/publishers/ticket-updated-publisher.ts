import { Publisher, Subjects, TicketUpdatedEvent } from '@mooping/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
