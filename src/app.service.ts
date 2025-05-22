import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'node:fs';
export interface Aluno {
  id: string;
  nome: string;
  idade: number;
  curso: string;
}
@Injectable()
export class AppService {
  /*[
    {"id": "1", "nome": "João", "idade": 20, "curso": "Engenharia"},
    {"id": "2", "nome": "Maria", "idade": 22, "curso": "Medicina"},
    {"id": "3", "nome": "Pedro", "idade": 19, "curso": "Direito"},
    {"id": "4", "nome": "Ana", "idade": 21, "curso": "Arquitetura"},
    {"id": "5", "nome": "Lucas", "idade": 23, "curso": "Ciência da Computação"}
  ]*/
  private alunos: Aluno[] = JSON.parse(readFileSync('src/alunos.json', 'utf-8'));
  getHello(): string {
    return 'Hello World!';
  }
  getAlunos(): Aluno[] { //: Array<string> {
    return this.alunos;
  }
  getAlunoId(id: string): Aluno[] {
    return this.alunos.filter((aluno) => aluno.id == id);
  }
  createAluno(aluno: Aluno){
    const alunoExistente = this.alunos.find((a) => a.id === aluno.id);

    if (alunoExistente) {
      throw new Error('Aluno já existe');
    }

    this.alunos.push(aluno);
    writeFileSync('src/alunos.json', JSON.stringify(this.alunos, null, 2));
  }
}
