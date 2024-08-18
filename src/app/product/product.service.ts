import { Injectable } from '@angular/core';
import { Product } from './product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: Product[] = [];

  public get products(): Product[] {
    return this._products;
  }

  constructor() {
    this.initProducts();
  }

  initProducts() {
    this._products = [
      {
        id: '1',
        name: 'Em hang 1',
        description: 'Ngon',
        price: 100,
        thumbnailURL:
          'https://img.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2023/10/anh-gai-xinh-toc-ngan-76-jpg-1696391678-04102023105438.jpg',
        quantity: 10,
        category: 'Category 1',
        status: 'Available',
      },
      {
        id: '2',
        name: 'Em hang 2',
        description: 'Qua Ngon',
        price: 200,
        thumbnailURL:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvtcnews.vn%2Fngam-dan-trai-xinh-gai-dep-hoc-vien-chinh-sach-va-phat-trien-trong-mau-ao-quan-su-ar810352.html&psig=AOvVaw3RInjEvStaZevWVc4Gs0c9&ust=1723816878970000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJix3sKU94cDFQAAAAAdAAAAABAJ',
        quantity: 20,
        category: 'Category 2',
        status: 'Available',
      },
      {
        id: '3',
        name: 'em Hang 3',
        description: 'Description 3',
        price: 300,
        thumbnailURL: 'https://via.placeholder.com/150',
        quantity: 30,
        category: 'Category 3',
        status: 'Available',
      },
    ];
  }
  deleteProduct(id: string) {
    this._products = this._products.filter((product) => product.id !== id);
  }
}
