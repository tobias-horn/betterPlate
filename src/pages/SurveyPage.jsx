import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, ChevronRight, ChevronLeft, Send, Loader2 } from 'lucide-react';

const SurveyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartData, truePricePercentage } = location.state || { cartData: [], truePricePercentage: 0 };
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const [answers, setAnswers] = useState({
    q1_understanding: null,
    q2_truePrice_covers: null,
    q3_willingness_to_pay: null,
    q5_impact_points_motivation: null,
    q6_switch_reason: null,
    q7_complexity: null,
    q8_cognitive_load: null,
    q9_interruption_frequency: null,
    q10_want_in_real_app: null,
    q11_greenwashing_feedback: '',
    q12_improvement_suggestion: ''
  });

  const questions = [
    {
      id: 'q1_understanding',
      question: 'After using the prototype, how well do you understand what "True Price" means?',
      questionDE: 'Wie gut verstehen Sie nach der Nutzung des Prototyps, was "True Price" bedeutet?',
      type: 'scale',
      scaleLabels: { 1: 'Not at all', 7: 'Very well' },
      scaleLabelsDE: { 1: 'Gar nicht', 7: 'Sehr gut' }
    },
    {
      id: 'q2_truePrice_covers',
      question: 'What do you think the "True Price" covers?',
      questionDE: 'Was deckt der "True Price" Ihrer Meinung nach ab?',
      type: 'single-choice',
      options: [
        { value: 'environmental_costs', label: 'Environmental costs', labelDE: 'Umweltkosten' },
        { value: 'social_costs', label: 'Social costs', labelDE: 'Soziale Kosten' },
        { value: 'company_profit', label: 'Company profit', labelDE: 'Unternehmensgewinn' },
        { value: 'not_sure', label: 'Not sure', labelDE: 'Nicht sicher' }
      ]
    },
    {
      id: 'q3_willingness_to_pay',
      question: 'Because of the information shown in the prototype, I would be more willing to pay the True Price for some products.',
      questionDE: 'Aufgrund der im Prototyp gezeigten Informationen wäre ich eher bereit, den True Price für einige Produkte zu zahlen.',
      type: 'scale',
      scaleLabels: { 1: 'Strongly disagree', 7: 'Strongly agree' },
      scaleLabelsDE: { 1: 'Stimme gar nicht zu', 7: 'Stimme voll zu' }
    },
    {
      id: 'q5_impact_points_motivation',
      question: 'The impact points motivated me to change at least one product choice.',
      questionDE: 'Die Impact-Punkte haben mich motiviert, mindestens eine Produktwahl zu ändern.',
      type: 'scale',
      scaleLabels: { 1: 'Strongly disagree', 7: 'Strongly agree' },
      scaleLabelsDE: { 1: 'Stimme gar nicht zu', 7: 'Stimme voll zu' }
    },
    {
      id: 'q6_switch_reason',
      question: 'When you switched a product (if you did), what was the main reason?',
      questionDE: 'Wenn Sie ein Produkt gewechselt haben, was war der Hauptgrund?',
      type: 'single-choice',
      options: [
        { value: 'price', label: 'Price', labelDE: 'Preis' },
        { value: 'sustainability', label: 'Sustainability', labelDE: 'Nachhaltigkeit' },
        { value: 'health', label: 'Health', labelDE: 'Gesundheit' },
        { value: 'points', label: 'Points/Scores', labelDE: 'Punkte/Scores' },
        { value: 'brand', label: 'Brand', labelDE: 'Marke' },
        { value: 'did_not_switch', label: 'Did not switch', labelDE: 'Habe nicht gewechselt' }
      ]
    },
    {
      id: 'q7_complexity',
      question: 'The sustainability features made shopping more complex.',
      questionDE: 'Die Nachhaltigkeitsfunktionen haben das Einkaufen komplexer gemacht.',
      type: 'scale',
      scaleLabels: { 1: 'Strongly disagree', 7: 'Strongly agree' },
      scaleLabelsDE: { 1: 'Stimme gar nicht zu', 7: 'Stimme voll zu' }
    },
    {
      id: 'q8_cognitive_load',
      question: 'I could complete my order without having to think too much about the sustainability features.',
      questionDE: 'Ich konnte meine Bestellung abschließen, ohne zu viel über die Nachhaltigkeitsfunktionen nachdenken zu müssen.',
      type: 'scale',
      scaleLabels: { 1: 'Strongly disagree', 7: 'Strongly agree' },
      scaleLabelsDE: { 1: 'Stimme gar nicht zu', 7: 'Stimme voll zu' }
    },
    {
      id: 'q9_interruption_frequency',
      question: 'At any point, did the sustainability features interrupt your shopping flow?',
      questionDE: 'Haben die Nachhaltigkeitsfunktionen Ihren Einkaufsfluss unterbrochen?',
      type: 'single-choice',
      options: [
        { value: 'never', label: 'Never', labelDE: 'Nie' },
        { value: 'once', label: 'Once', labelDE: 'Einmal' },
        { value: 'few_times', label: 'A few times', labelDE: 'Ein paar Mal' },
        { value: 'often', label: 'Often', labelDE: 'Oft' }
      ]
    },
    {
      id: 'q10_want_in_real_app',
      question: 'I would like to see this kind of impact transparency in a real grocery app.',
      questionDE: 'Ich würde mir diese Art von Impact-Transparenz in einer echten Lebensmittel-App wünschen.',
      type: 'scale',
      scaleLabels: { 1: 'Strongly disagree', 7: 'Strongly agree' },
      scaleLabelsDE: { 1: 'Stimme gar nicht zu', 7: 'Stimme voll zu' }
    },
    {
      id: 'q11_greenwashing_feedback',
      question: 'Did anything feel unclear or like marketing/greenwashing?',
      questionDE: 'Gab es etwas, das unklar wirkte oder wie Marketing/Greenwashing aussah?',
      type: 'text'
    },
    {
      id: 'q12_improvement_suggestion',
      question: 'What is the one change that would make this prototype clearer or more motivating for you?',
      questionDE: 'Welche eine Änderung würde diesen Prototyp für Sie klarer oder motivierender machen?',
      type: 'text'
    }
  ];

  const currentQuestion = questions[currentStep];

  const handleScaleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleChoiceAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleTextAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'text') {
      return true; // Text answers are optional
    }
    return answer !== null && answer !== undefined;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Prepare cart summary
    const cartSummary = cartData.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      truePrice: item.truePrice,
      truePriceClass: item.truePriceClass,
      quantity: item.quantity,
      category: item.category,
      tags: item.tags
    }));

    const payload = {
      timestamp: new Date().toISOString(),
      sessionId: `session_${Date.now()}`,
      
      // Cart data
      cart: {
        items: cartSummary,
        itemCount: cartData.reduce((sum, item) => sum + item.quantity, 0),
        subtotal: cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        truePriceTotal: cartData.reduce((sum, item) => sum + (item.truePrice * item.quantity), 0)
      },
      
      // True Price contribution
      truePriceContribution: {
        percentage: truePricePercentage,
        paidTruePrice: truePricePercentage > 0
      },
      
      // Survey responses
      responses: {
        q1_truePrice_understanding: {
          questionId: 'q1',
          questionText: 'How well do you understand what True Price means?',
          answerType: '7-point scale',
          answer: answers.q1_understanding
        },
        q2_truePrice_covers: {
          questionId: 'q2',
          questionText: 'What do you think the True Price covers?',
          answerType: 'single-choice',
          answer: answers.q2_truePrice_covers
        },
        q3_willingness_to_pay: {
          questionId: 'q3',
          questionText: 'Willingness to pay True Price after seeing information',
          answerType: '7-point Likert',
          answer: answers.q3_willingness_to_pay
        },
        q5_impact_points_motivation: {
          questionId: 'q5',
          questionText: 'Impact points motivated product choice change',
          answerType: '7-point Likert',
          answer: answers.q5_impact_points_motivation
        },
        q6_switch_reason: {
          questionId: 'q6',
          questionText: 'Main reason for switching product',
          answerType: 'single-choice',
          answer: answers.q6_switch_reason
        },
        q7_complexity: {
          questionId: 'q7',
          questionText: 'Sustainability features made shopping more complex',
          answerType: '7-point Likert',
          answer: answers.q7_complexity
        },
        q8_cognitive_load: {
          questionId: 'q8',
          questionText: 'Could complete order without thinking too much about sustainability',
          answerType: '7-point Likert',
          answer: answers.q8_cognitive_load
        },
        q9_interruption_frequency: {
          questionId: 'q9',
          questionText: 'Did sustainability features interrupt shopping flow',
          answerType: 'frequency scale',
          answer: answers.q9_interruption_frequency
        },
        q10_want_in_real_app: {
          questionId: 'q10',
          questionText: 'Would like impact transparency in real grocery app',
          answerType: '7-point Likert',
          answer: answers.q10_want_in_real_app
        },
        q11_greenwashing_feedback: {
          questionId: 'q11',
          questionText: 'Anything unclear or like greenwashing',
          answerType: 'open-ended',
          answer: answers.q11_greenwashing_feedback || null
        },
        q12_improvement_suggestion: {
          questionId: 'q12',
          questionText: 'One change to make prototype clearer/more motivating',
          answerType: 'open-ended',
          answer: answers.q12_improvement_suggestion || null
        }
      }
    };

    try {
      // Use navigator.sendBeacon for reliable delivery, or fetch without cors restrictions
      const webhookUrl = 'https://n8n.tobiashorn.com/webhook/d7377674-98b2-497a-bb0d-d9030be0e59d';
      
      // Try fetch first
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      console.log('Survey submitted successfully:', response.status);
      setIsComplete(true);
    } catch (error) {
      console.error('Survey submission error:', error);
      
      // Fallback: try sendBeacon if fetch fails due to CORS
      try {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon('https://n8n.tobiashorn.com/webhook/d7377674-98b2-497a-bb0d-d9030be0e59d', blob);
        console.log('Survey submitted via sendBeacon');
      } catch (beaconError) {
        console.error('SendBeacon also failed:', beaconError);
      }
      
      // Still mark as complete even if webhook fails
      setIsComplete(true);
    }
    
    setIsSubmitting(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={40} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Vielen Dank für Ihr Feedback!
          </h1>
          <p className="text-gray-600 mb-6">
            Ihre Antworten helfen uns, das BetterPlate-Erlebnis zu verbessern.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Frage {currentStep + 1} von {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {currentQuestion.questionDE}
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          {currentQuestion.question}
        </p>

        {/* Scale Question */}
        {currentQuestion.type === 'scale' && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-500 px-2">
              <span>{currentQuestion.scaleLabelsDE[1]}</span>
              <span>{currentQuestion.scaleLabelsDE[7]}</span>
            </div>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map(value => (
                <button
                  key={value}
                  onClick={() => handleScaleAnswer(value)}
                  className={`flex-1 h-14 rounded-xl font-semibold text-lg transition-all ${
                    answers[currentQuestion.id] === value
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Single Choice Question */}
        {currentQuestion.type === 'single-choice' && (
          <div className="space-y-3">
            {currentQuestion.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleChoiceAnswer(option.value)}
                className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                  answers[currentQuestion.id] === option.value
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-white bg-white'
                    : 'border-gray-400'
                }`}>
                  {answers[currentQuestion.id] === option.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  )}
                </div>
                <div>
                  <span className="font-medium">{option.labelDE}</span>
                  <span className="text-sm opacity-75 ml-2">({option.label})</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Text Question */}
        {currentQuestion.type === 'text' && (
          <div>
            <textarea
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleTextAnswer(e.target.value)}
              placeholder="Ihre Antwort (optional)..."
              className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
            currentStep === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft size={20} />
          Zurück
        </button>

        {currentStep < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              canProceed()
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Weiter
            <ChevronRight size={20} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send size={20} />
                Absenden
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SurveyPage;
