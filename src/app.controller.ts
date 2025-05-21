import { Controller, Get } from '@nestjs/common';
import { AppService, Aluno } from './app.service';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/alunos')
  getAlunos(): Aluno[] {//Array<string> {
    return this.appService.getAlunos();
  }
  @Get('/alunos/:id')
  getAlunoId(@Param('id') id: string): Aluno[] {
    return this.appService.getAlunoId(id);
  }
}
