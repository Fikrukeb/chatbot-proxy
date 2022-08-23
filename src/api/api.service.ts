import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) { }
    private getEndpoint(url): Promise<any> {
        return lastValueFrom(
            this.httpService.get<any>(url).pipe(
                map((res) => {
                    return res.data;
                }),
            ),
        );
    }
    async getBotResponse(message: string): Promise<any> {
        const obj = await this.getEndpoint(`https://nov-chatbot.herokuapp.com/chat?message=${message}`);
        console.log(obj);
        return obj;
    }
}
