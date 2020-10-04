class Pedidos {
    map(arg0: (Pedidos: any) => any): any {
      throw new Error('Method not implemented.');
    }
    constructor(
      public address: string,
      public number: number,
      public optionalAddress: string,
      public paymentOption: string,
      public PedidoItems: PedidoItem[] = [],
      public id?: string
    ){}
  }
  
  class PedidoItem {
    constructor(public quantity: number, public pedidoId: string){}
  }
  
  export {Pedidos, PedidoItem}
  