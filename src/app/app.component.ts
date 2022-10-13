import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MedicionItem, Mediciones } from './Mediciones';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public constructor(private _detector: ChangeDetectorRef) {

    }

    @ViewChild("legend", { static: true } )
    private legend: IgxLegendComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxCategoryChartComponent

    private _mediciones: Mediciones ;

    public get Mediciones(): Mediciones {
        if (this._mediciones == null)
        {
            this._mediciones = new Mediciones;
        }
        return this._mediciones;
    }

}

