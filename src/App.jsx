import { useState, useEffect } from 'react';
import { steps } from './data/steps';
import Layout from './components/Layout';
import StepCard from './components/StepCard';
import ProgressBar from './components/ProgressBar';
import NeonButton from './components/NeonButton';
import Toast from './components/Toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
    const [stepIndex, setStepIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [lang, setLang] = useState('zh'); // 'zh' or 'en'
    const [toastMsg, setToastMsg] = useState('');
    const [showToast, setShowToast] = useState(false);

    const showCopyToast = (msg) => {
        setToastMsg(msg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextStep();
            } else if (e.key === 'ArrowLeft') {
                prevStep();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [stepIndex, steps.length]); // Re-bind when stepIndex changes to ensure closure captures correct value

    const nextStep = () => {
        if (stepIndex < steps.length - 1) {
            setDirection(1);
            setStepIndex(stepIndex + 1);
        }
    };

    const prevStep = () => {
        if (stepIndex > 0) {
            setDirection(-1);
            setStepIndex(stepIndex - 1);
        }
    };

    return (
        <Layout lang={lang} setLang={setLang}>
            <ProgressBar current={stepIndex + 1} total={steps.length} lang={lang} />

            <StepCard
                step={steps[stepIndex]}
                direction={direction}
                lang={lang}
                onCopy={showCopyToast}
            />

            <div className="flex gap-4 mt-8 px-4 w-full max-w-6xl mx-auto justify-between z-20">
                <NeonButton onClick={prevStep} disabled={stepIndex === 0}>
                    <ChevronLeft size={20} />
                    {lang === 'zh' ? '上一步' : 'PREV'}
                </NeonButton>

                <NeonButton onClick={nextStep} disabled={stepIndex === steps.length - 1}>
                    {lang === 'zh' ? '下一步' : 'NEXT'}
                    <ChevronRight size={20} />
                </NeonButton>
            </div>

            <Toast message={toastMsg} isVisible={showToast} />
        </Layout>
    );
}

export default App;
