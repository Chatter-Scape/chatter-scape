import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsEmail } from 'class-validator';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column({ name: 'user_type_id', nullable: false })
  userTypeId: number;

  @Column({ name: 'stripe_customer_id', nullable: true, default: null })
  stripeCustomerId: string;

  @Column({ name: 'stripe_subscription_id', nullable: true, default: null })
  stripeSubscriptionId: string;

  @Column({
    name: 'email',
    nullable: false,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({ name: 'password' })
  @Exclude()
  password: string;

  @Column({
    name: 'user_registration_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userRegistrationDate: Date;

  @Column({
    name: 'last_logged_in',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastLoggedIn: Date;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'is_email_verified', default: false })
  isEmailVerified: boolean;

  @Column({ name: 'previous_user_type' })
  previousUsertype: number;
}
