export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    description: 'Analgésico y antipirético, 100 tabletas',
    price: 5.99,
    category: 'Analgésicos'
  },
  {
    id: 2,
    name: 'Ibuprofeno 400mg',
    description: 'Antiinflamatorio no esteroideo, 30 cápsulas',
    price: 7.50,
    category: 'Antiinflamatorios'
  },
  {
    id: 3,
    name: 'Omeprazol 20mg',
    description: 'Protector gástrico, 28 cápsulas',
    price: 8.25,
    category: 'Gastrointestinales'
  },
  {
    id: 4,
    name: 'Atorvastatina 20mg',
    description: 'Hipolipemiante, 30 comprimidos',
    price: 15.75,
    category: 'Cardiovasculares'
  },
  {
    id: 5,
    name: 'Metformina 850mg',
    description: 'Antidiabético oral, 60 comprimidos',
    price: 9.99,
    category: 'Endocrinología'
  },
  {
    id: 6,
    name: 'Aspirina 100mg',
    description: 'Antiagregante plaquetario, 28 comprimidos',
    price: 4.50,
    category: 'Cardiovasculares'
  },
  {
    id: 7,
    name: 'Loratadina 10mg',
    description: 'Antihistamínico, 20 comprimidos',
    price: 6.25,
    category: 'Antialérgicos'
  },
  {
    id: 8,
    name: 'Amoxicilina 500mg',
    description: 'Antibiótico, 12 cápsulas',
    price: 12.99,
    category: 'Antibióticos'
  },
  {
    id: 9,
    name: 'Salbutamol inhalador',
    description: 'Broncodilatador, 200 dosis',
    price: 18.50,
    category: 'Respiratorios'
  },
  {
    id: 10,
    name: 'Insulina glargina',
    description: 'Antidiabético inyectable, 5 cartuchos',
    price: 45.75,
    category: 'Endocrinología'
  },
  {
    id: 11,
    name: 'Warfarina 5mg',
    description: 'Anticoagulante, 30 comprimidos',
    price: 10.25,
    category: 'Cardiovasculares'
  },
  {
    id: 12,
    name: 'Diazepam 5mg',
    description: 'Ansiolítico, 20 comprimidos',
    price: 8.75,
    category: 'Neurológicos'
  }
];
