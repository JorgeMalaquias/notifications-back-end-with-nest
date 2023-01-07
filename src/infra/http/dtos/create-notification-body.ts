import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsString()
  recipientId: string;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  category: string;
}
