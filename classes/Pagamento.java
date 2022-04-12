package com.company.poo.model;

public class Pagamento {
    private String formaDePagamento;
    private double valorTotal;

    public Pagamento(String formaDePagamento, double valorTotal){
        this.formaDePagamento = formaDePagamento;
        this.valorTotal = valorTotal;
    }
}
