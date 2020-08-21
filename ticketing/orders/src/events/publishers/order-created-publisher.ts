import { Publisher, OrderCreatedEvent, Subjects } from '@mooping/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
