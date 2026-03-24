# MaskTanager

Projeto fullstack para auxiliar no estudo de ASP.NET para o desenvolvimento de APIs, e React com Vite para o desenvolvimento do Front End.

O diretório API tem um docker-compose.yml utilizado para subir um container com runtime e um container com um banco de dados PgSql.

O diretório Public tem os módulos npm utilizados para rodar o projeto no cliente.


## Sobre os endpoints

A API foi desenvolvida para cumprir o papel de um CRUD básico. Atualmente, serve os seguintes endpoints:

+ GET /Task
+ GET /Task/{id}
+ POST /Task/edit
+ POST /Task/delete
+ POST /Task/add

### GET

#### /Task
Retorna todas as tasks encontradas no banco de dados.

#### /Task/{id}
Retorna uma task filtrando pelo ID recebido. Caso não encontre, retorna 404.



### POST

#### /Task/edit
Realiza a edição dos dados de uma task à partir de um ID.

##### Params
+ Id (obrigatório) - Id da task que deve ser editada
+ TItle (opcional) - Novo título da task que deve ser editada
+ Description (opcional) - Nova descrição da task que deve ser editada
+ Status (opcional) - Novo status da task que deve ser editada


#### /Task/delete
Realiza a exclusão de uma task à partir de um ID.

##### Params
+ Id (obrigatório) - Id da task que deve ser excluída


#### /Task/add
Realiza a inclusão de uma task à partir de um título e descrição iniciais. O Status padrão da task sempre será "Pendente".

##### Params
+ Title (obrigatório) - Titulo da task que está sendo incluída;
+ Description (opcional) - Descrição da task que está sendo incluída;