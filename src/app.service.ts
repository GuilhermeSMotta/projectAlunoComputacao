import { Injectable } from '@nestjs/common';
export interface Aluno {
  id: number;
  nome: string;
  idade: number;
  curso: string;
}
@Injectable()
export class AppService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'João', idade: 20, curso: 'Engenharia' },
    { id: 2, nome: 'Maria', idade: 22, curso: 'Medicina' },
    { id: 3, nome: 'Pedro', idade: 19, curso: 'Direito' },
    { id: 4, nome: 'Ana', idade: 21, curso: 'Arquitetura' },
    { id: 5, nome: 'Lucas', idade: 23, curso: 'Ciência da Computação' }
  ];
  getHello(): string {
    return 'Hello World!';
  }
  getAlunos(): Aluno[] { //: Array<string> {
    return this.alunos;
  }
  getAlunoId(id): Aluno[] {
    return this.alunos.filter((aluno) => aluno.id == id);
  }
}
