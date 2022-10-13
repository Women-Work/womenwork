import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";


@Controller("/produtos")
export class ProdutoController{
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
        return this.produtoService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Produto[]> {
        return this.produtoService.findByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() produto: Produto
    ): Promise<Produto>{
        return this.produtoService.create(produto);
    }
    
}