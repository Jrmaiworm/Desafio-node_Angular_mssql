import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { CostumerService } from '@app/_services';
import { Costumer } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    costumers!: Costumer[];

    constructor(private costumerService: CostumerService) {}

    ngOnInit() {
        this.costumerService.getAll()
            .pipe(first())
            .subscribe(costumers => this.costumers = costumers);
    }

    deleteCostumer(id: string) {
        const costumer = this.costumers.find(x => x.id === id);
        if (!costumer) return;
        costumer.isDeleting = true;
        this.costumerService.delete(id)
            .pipe(first())
            .subscribe(() => this.costumers = this.costumers.filter(x => x.id !== id));
    }
}