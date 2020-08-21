import { Publisher, OrderCancelledEvent, Subjects } from '@mooping/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
