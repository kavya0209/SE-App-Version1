import { Component, OnInit , ViewChild } from '@angular/core';
import { getDefaultFormatCodeSettings } from 'typescript';
import { PredictionsService } from '../../shared/services/predictions.service';
// import { Storage } from "@aws-amplify/storage";
// import { API } from 'aws-amplify'
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { utils, write, WorkBook } from 'xlsx';
// import { saveAs } from 'file-saver';

@Component({
  selector: 'app-prediction-engine',
  templateUrl: './prediction-engine.component.html',
  styleUrls: ['./prediction-engine.component.scss']
})
export class PredictionEngineComponent implements OnInit {

  folderNames = [];
  outputpath : any;
  datasetModel = '';
  dataset = '';
  resultData : any;
  outputText = '';
  downloadLink = '';
  downloadLinkBool : boolean = false;
 
  @ViewChild('f') form: any;

  constructor(
    private predictionService: PredictionsService,
  ) { }

  ngOnInit(): void {
    // console.log(this.downloadLinkBool);
    this.getDatasets();
  }

  getDatasets(){
     
    // Storage.list('')
    // .then(data => {
    //   var datalist = data;
    //   for(var i=2;i<datalist.length;i++){
    //     var x = datalist[i].key.slice(12);
    //     var y = x.split("/");
    //     var z = y[0];
    //     this.folderNames.push(z);
    //   }
    // })
    // .catch(err => console.log(err));
  }

  save(){

    // this.outputpath = '';
    // this.downloadLinkBool = false;
    // if(this.dataset && this.datasetModel){
    //   this.predictionService.getPrediction().subscribe((result: { data: any[]; }) => {
    //     this.outputpath = result;
    //     this.outputText = 'Validation file has been generated successfully .Please click on the download button to download the file';
        
    //     this.predictionService.getValidationData().subscribe((result) => {
    //       this.downloadLinkBool = true;
    //       this.downloadLink = result;
    //       console.log(result);
    //     });
    //   });
    // }
    // else{
    //   alert("Please enter all fields");
    // }
  }

  /*
  downloadReport(){

    var data = [['kavya' , 'AEG'],['Sumana','AEG'] ]
    // var objdata = JSON.parse(JSON.stringify(data));
    
    const ws_name = 'Nominations';
    const wb: WorkBook = { SheetNames: [], Sheets: {} };
    const ws: any = utils.json_to_sheet(this.predictionService.getDataTypeFormattedForDownload(data));
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    const wbout = write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    var s2ab = function (s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
      };
      return buf;
    }
    // var nowTime = this.globals.getFullDateTime(new Date());
    var downloadFileName = `Nominations.xlsx`;
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), downloadFileName);
    alert("Transformers Nomination is downloaded.")
  }
   
*/  

  

  



























}
