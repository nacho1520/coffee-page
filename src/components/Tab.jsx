const Tab = ({ tabs, activeTab, setActiveTab }) => {
    return(
        <div className="inline-flex flex-wrap items-center gap-3">
            {
                tabs.map((tab) => (
                    <button 
                        key={ tab.id } 
                        className={ activeTab === tab.id  ?
                            'bg-[#6F757C] rounded-lg px-3 py-2 font-bold text-sm text-[#FEF7EE]' : 
                            'px-3 py-2 font-bold text-sm text-[#FEF7EE]' 
                        }
                        onClick={ () => setActiveTab(tab.id) }
                    >
                        { tab.label }
                    </button>
                ))
            }
        </div>
    );
};

export default Tab;