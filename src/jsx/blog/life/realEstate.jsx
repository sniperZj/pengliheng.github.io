import React,{Component} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties,xcode } from "react-syntax-highlighter/dist/styles";
import { Row, Col } from 'antd';

export default class realEstate extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
      style: tomorrowNightEighties,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>关于买二手房</h3>
        <p>神坑，中国房地产泡沫要爆，政府刁大大逆天改命，市场经济回归计划经济，禁止交易就不会爆泡沫了</p>
        <p>但是19大之后，李克强总理上任，并强调让市场经济主导，政府不干预，这事有点悬，总之.中国房地产黄金发展的20年可以划上。了</p>
        <p>最近买房真的是操心！</p>
        <p>首先我觉得还是有必要普及一下新知识，买房分为4中情况，</p>
        <ul>
          <li>你全款买，业主贷款已还清或者没有贷款</li>
          <li>你贷款，业主贷款已还清</li>
          <li>你全款买，业主在银行贷款有贷款</li>
          <li>你贷款买，业主在银行贷款有贷款</li>
        </ul>
        <p>当然了，还有最重要一件事情没做，<b>查档</b>，查看业主房子有没有被法院查封，第二，<b>查看房屋所有人姓名</b>，房产证上面有几个人，就要有几个人在购房合同上面签字，这个很重要，因为如果业主是房屋共有人的话，他是没有权利处理不属于他那一部分的财产，不然<b>合同无效</b>。</p>
        <p>那么先说一下第一种情况，最简单，资金交给<b>银行监管</b>，或者房管局监管，或者先公证，到时候可以不需要业主到现场，自己一个人去房管局都可以过户，几百元而已，不是按照房屋价值百分比收费的，只要一过户，银行自动将监管账户中的钱划扣给业主，切忌先打钱后过户，因为过户会遇到很多因素导致无法过户，比如说业主房子被查封导致无法过户，或者国家政策改了，今天无法过户，等等..,如果一套房子全款100w，那么业主当时可能是愿意过户，但是过了一个晚上就很难说了，20w人家可能还会怕担法律责任，100w他就敢冒杀头的风险。</p>
        <p>第二种情况，也是和第一种，业主风险稍稍大一点，因为只给了首付就要过户给你，先去银行办理贷款手续，银行同贷书下来后给业主看，买家把首付30w给业主，业主过户给你，你拿房产证到银行办理抵押贷款</p>
        <p>第三种情况，比较复杂，业主自己赎楼就好办，等消息，担保公司帮忙赎楼也好办，坐等流程，一般是3000元，最差的情况，业主或者中介提议你的首付款先给业主，业主拿首付款去赎楼，银行走流程1个月后解除抵押，再去房管局办理过户手续，这是对卖家最不利的一种情况，首付款给了，但是房子没有过户到你名下，也没有公证，只是在中介公司见证下办理的手续，这也是笔者现在经历的一种情况，还好找的是一个大的中介公司Q房网，和业主签订了一个购房垫子协议，其中最重要一条，如果违约，业主承担房价30%的赔偿金，有了这一条重算能睡好觉了，要知道中国法律对于我这样的法盲来说，很陌生！诉讼费，律师费，流程，证据收集，很麻烦，而且还要要求中介配合出席证人，中介会不会趁机要你先给中介费还很难说，毕竟是求人。不过有钱任性哈哈！</p>
        <p>第四种情况，和第三种差不多，买房人穷一点，业主没那么早拿到钱，这个是中国大多数人买房所经历的流程，毕竟现在房价这么高，谁特么这么有钱全款买房，只有老人家才全款买，年纪大银行不批贷款吧。。。现在银行也穷。这也是笔者现在经历的买房流程，哎没钱不能任性，<b>不爽！</b></p>
        <p>综上所述</p>
        <ul>
          <li>如果第一次买房还是找中介吧，找家大公（q房网，家家顺，链家，自己去网上查查，开了100+分店差不多了），给点钱别人赚，虽然中间经常吃差价，中介费3%太高（其实可以讲价），但毕竟一分钱一分货，</li>
          <li>签合同尽量看清楚条款，不要以为是标准模板合同就不看，一样很多坑，中介费过户时候给，事情没办完收什么钱</li>
          <li>切忌首付款帮业主赎楼，房管局明确禁止这种交易流程的，当然中介不会告诉你，中介只需要成交！成交！成交！</li>
          <li>现在房价疯涨，各种限购政策，业主频频反价，不要被利益冲昏了眼，房子是拿来住的！！！！！！！！！！</li>
          <li>明确规定中介责任义务，一般模板合同里面所有条文都是对中介有利的，给钱尽量通过中介给钱，这样打官司中介很难摆脱嫌疑，如果房子不是因为买家原因无法成交，买家拒绝给中介费，开玩笑，几万块钱这么容易捞？</li>
          <li>赔偿金的问题，可以和业主约定为房价20%，这样很多胆小的业主不敢冒风险违约的，</li>
          <li>业主夫妇最好两个人一起到现场签字，因为房子可能是业主一个人的名字，但是！婚后购买的财产属于夫妻共同财产，你觉得他老婆有没有问题？</li>
          <li>看房要多看，至少看100套，看准了以后下定金要下的快，这里笔者就是因为看房看得少，被利益冲昏了头脑，当天看房当天签合同...呜呜呜呜呜</li>
        </ul>
        <p>最后说一句，能买还是早点买，卖房是为了把手上的房子套现，不然不用卖，尽量多贷款，拉上银行和你一起承当买房风险，好一些</p>
        <p>前几天听到房管局有人跳楼，100w买房款给了业主，结果在房管局过户的时候，发现房子被查封，卖房的跑路了，买房人跳楼</p>
        <p>注意了，房管局严令禁止首付款帮业主赎楼，不要用别人的错误，不道德来伤害自己。</p>
        <p>仔细分析，100w买房，肯定是全款买房，全款买房还不走银行监督流程，这不是胡闹，买房人是有问题的，什么都不懂买个西瓜洗洗睡去吧，然后大批看热闹人看热闹，然后大批中介发朋友圈，这就是绕开中介的后果！很多中介素质超低</p>
        <p>像我这没买过房子的，还去了家家顺，创二地产混了一个月，培训了3天才弄懂买房基本流程，中介是如何怂恿业主成交，只说好消息，不说差消息，先看最好的房，再看最差的房子，然后再看适合的房子，形成价格心理落差，达成交易，鼓励多和盘方合作，公司抽成50%，剩下的合作人分！</p>
        <h5>好了8:27了。我要去上班！</h5>
      </Col>
    )
  }
}