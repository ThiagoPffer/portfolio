import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrowUpRightIcon, ChevronLeftIcon, ChevronRightIcon, Images, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  animations: [
    trigger('carouselAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms cubic-bezier(.55,.80,.15,1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('600ms cubic-bezier(.55,.80,.15,1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  ArrowUpRightIcon = ArrowUpRightIcon;
  ChevronRightIcon = ChevronRightIcon;
  ChevronLeftIcon = ChevronLeftIcon;

  galleryModalIndex = 0;
  galleryPreviewIndex = 0;
  galleryOpen = false;
  galleryImages: string[] = [];
  imageFadeClass = ''
  currentInterval: any;

  currentIndex = 0;

  ngOnInit(): void {
    this.activateGalleryPreview(this.projects[this.currentIndex].images.length);
  }

  projects = [
    {
      title: 'CRM Golden&Co',
      description: 'Desenvolvido para uso da joalheria Golden&Co, em Joinville, este projeto permitiu à empresa gerenciar seus clientes, produtos e vendas de forma eficiente, organizar campanhas de venda baseadas em datas comemorativas de clientes e gerenciar orçamentos para produção de joias, além de permitir o gerenciamento de funcionários, os quais são usuários do sistema. Trata-se de uma aplicação web desenvolvida em AngularJS, que oferece uma interface amigável para os usuários, usando Firebase para gerenciar os dados, permissões e outras funções.',
      images: [
        'assets/images/projects/goldenco/goldenco_1.png',
        'assets/images/projects/goldenco/goldenco_2.png',
        'assets/images/projects/goldenco/goldenco_3.png',
        'assets/images/projects/goldenco/goldenco_4.png'
      ]
    },
    {
      title: 'Piffer Planning',
      description: 'Uma aplicação web desenvolvida em Angular e usando Firebase para operações em tempo real, feita com o intuito de auxiliar na rotina de plannings da empresa em que trabalho, e que substituiu o uso de outras opções disponíveis na web que não atendiam às necessidades específicas da equipe. Através de uma interface intuitiva, é possível criar e gerenciar plannings para diferentes equipes, realizar votações, organizar as atividades votadas e até mesmo cutucar os colegas usando emojis! 😅',
      images: [
        'assets/images/projects/pifferplanning/pifferplanning_1.png',
        'assets/images/projects/pifferplanning/pifferplanning_2.png',
        'assets/images/projects/pifferplanning/pifferplanning_3.png',
        'assets/images/projects/pifferplanning/pifferplanning_4.png'
      ],
      url: 'https://piffer-planning.netlify.app/'
    },
    {
      title: 'CNAB Helper',
      description: 'Desenvolvida usando apenas Angular, esta aplicação web tem como objetivo facilitar a visualização e compreensão de arquivos de remessa e retorno, que são amplamente utilizados no setor bancário para a troca de informações financeiras entre empresas e bancos. Através de uma interface amigável, os usuários podem carregar os dados de um arquivo ou criar um novo, podendo visualizar os dados de forma organizada, tornando mais fácil a análise e o entendimento das transações financeiras registradas nesses arquivos. Por hora, a aplicação possui suporte apenas para alguns arquivos do banco Itaú, podendo ser evoluída para suportar outros bancos e arquivos no futuro.',
      images: [
        'assets/images/projects/cnabhelper/cnabhelper_1.png',
        'assets/images/projects/cnabhelper/cnabhelper_2.png',
        'assets/images/projects/cnabhelper/cnabhelper_3.png',
        'assets/images/projects/cnabhelper/cnabhelper_4.png'
      ],
      url: 'https://cnab-helper.netlify.app/'
    },
    {
      title: 'Molduras - Espaço VIP',
      description: 'Um projeto simples, desenvolvido para auxiliar nos trabalhos da revista Espaço VIP que, para publicar fotos de eventos e outras ocasiões, precisava emoldurar as imagens e acrescentar a logo da revista no canto inferior direito. Para isto, foi desenvolvida esta aplicação usando apenas Javascript, onde é possível selecionar múltiplas imagens e, ao final do processamento, baixá-las em um arquivo .zip.',
      images: [
        'assets/images/projects/projetoespacovip/projetoespacovip_1.png',
        'assets/images/projects/projetoespacovip/projetoespacovip_2.png'
      ],
      url: 'https://thiagopffer.github.io/projeto-espaco-vip/'
    }
  ];

  prevProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.galleryModalIndex = 0;
      this.activateGalleryPreview(this.projects[this.currentIndex].images.length);
    };
  }

  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.galleryModalIndex = 0;
      this.activateGalleryPreview(this.projects[this.currentIndex].images.length);
    }
  }

  activateGalleryPreview(imageListLength: number) {
    this.galleryPreviewIndex = 0;
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
    this.currentInterval = setInterval(() => {
      this.imageFadeClass = 'fade-out';
      setTimeout(() => {
        if (this.galleryPreviewIndex < imageListLength - 1) {
          this.galleryPreviewIndex++;
        } else {
          this.galleryPreviewIndex = 0;
        }
        this.imageFadeClass = '';
      }, 200); 
    }, 3000);
  }

  openGallery(images: string[]) {
    this.galleryOpen = true;
    this.galleryImages = images;
  }

  closeGallery() {
    this.galleryOpen = false;
    this.galleryImages = [];
  }
  
  prevImage() {
    if (this.galleryModalIndex > 0) this.galleryModalIndex--;
  }

  nextImage() {
    if (this.galleryModalIndex < this.projects[this.currentIndex].images.length - 1) this.galleryModalIndex++;
  }

}
